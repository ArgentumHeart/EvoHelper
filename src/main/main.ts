/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain, globalShortcut } from 'electron';
import fs from 'fs/promises';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';
import { loadTevefData } from './load';
import { executeCommand } from './dirt/keyboard';
import { armFishing, disarmFishing } from './fishing';

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc', async (event, arg) => {
  const data = await loadTevefData(arg);
  event.reply('ipc', data);
});

ipcMain.on('load', async (event, arg) => {
  // clear previous hotkey forcefully
  globalShortcut.unregister('A');
  globalShortcut.register('A', async () => {
    globalShortcut.unregister('A');
    // eslint-disable-next-line no-restricted-syntax
    for (const command of arg) {
        // eslint-disable-next-line no-await-in-loop
        await executeCommand(command);
    }
  });
});

ipcMain.on('fishing_arm', async (event, arg) => {
  armFishing(arg);
});
ipcMain.on('fishing_disarm', async (event, arg) => {
  disarmFishing();
});

ipcMain.on('settings_read', async (event) => {
  try {
    const settings = await fs.readFile(
      path.join(app.getPath('userData'), 'settings.json'),
      'utf-8',
    );
    const json = JSON.parse(settings);
    const defaultWc3Path = path.join(app.getPath('documents'), 'Warcraft III');
    if (!json.wc3path) {
      json.wc3path = defaultWc3Path;
    }

    event.reply('settings_read', json);
  } catch (e) {
    // smth went wrong, return default settings
    event.reply('settings_read', {
      wc3path: path.join(app.getPath('documents'), 'Warcraft III'),
    });
    return;
  }
});

ipcMain.on('settings_write', async (event, arg) => {
  try {
    await fs.writeFile(
      path.join(app.getPath('userData'), 'settings.json'),
      JSON.stringify(arg),
    );
    event.reply('settings_write', true);
  } catch (e) {
    event.reply('settings_write', false);
  }
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload,
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);
