import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface ISettingsContext {
  wc3path: string;
  battleTag: string;
  extraLines: string;
  onlyT4Classes: boolean;
  favouriteClasses: string[];
  addFavouriteClass: (value: string) => void;
  removeFavouriteClass: (value: string) => void;
  setOnlyT4Classes: (onlyT4: boolean) => void;
  setExtra: (extra: string) => void;
  setBattleTag: (tag: string) => void;
  setWc3path: (path: string) => void;
  save: (value?: Object) => void;

}
export const SettingsContext = createContext({} as ISettingsContext);
export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [wc3path, setWc3path] = useState<string>('');
  const [battleTag, setBattleTag] = useState<string>('');
  const [extraLines, setExtra] = useState<string>('-woff\n-c\n');
  const [onlyT4Classes, setOnlyT4Classes] = useState<boolean>(false);
  const [favouriteClasses, setFavouriteClasses] = useState<string[]>([]);

  const save = (value?: Object) => {
    const settings = Object.assign({
      wc3path,
      battleTag,
      extraLines,
      onlyT4Classes,
      favouriteClasses
    }, {...value})
    window.electron.ipcRenderer.sendMessage('settings_write', settings);
  };
  const addFavouriteClass = (value: string) => {
      const favClasses = [...favouriteClasses, value]
      setFavouriteClasses(favClasses);
      save({favouriteClasses: favClasses});
  };

  const removeFavouriteClass = (value: string) => {
    const favClasses = favouriteClasses.filter((item) => item !== value)
    setFavouriteClasses(favClasses);
    save({favouriteClasses: favClasses});
  }
  const value = useMemo(
    () => ({
      wc3path,
      battleTag,
      extraLines,
      onlyT4Classes,
      favouriteClasses,
      addFavouriteClass,
      removeFavouriteClass,
      setOnlyT4Classes,
      setExtra,
      setBattleTag,
      setWc3path,
      save
    }),
    [
      wc3path,
      battleTag,
      extraLines,
      onlyT4Classes,
      addFavouriteClass,
      removeFavouriteClass,
      setOnlyT4Classes,
      setExtra,
      setBattleTag,
      setWc3path,
      save
    ],
  );

  useEffect(() => {
    window.electron.ipcRenderer.on('settings_read', (arg: any) => {
      if (arg) {
        arg.hasOwnProperty('wc3path') && setWc3path(arg.wc3path);
        arg.hasOwnProperty('battleTag') && setBattleTag(arg.battleTag);
        arg.hasOwnProperty('extraLines') && setExtra(arg.extraLines);
        arg.hasOwnProperty('onlyT4Classes') && setOnlyT4Classes(arg.onlyT4Classes);
        arg.hasOwnProperty('favouriteClasses') && setFavouriteClasses(arg.favouriteClasses);
      }
    });
    window.electron.ipcRenderer.sendMessage('settings_read');
  }, []);


  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
export const useSettingsContext = () => useContext(SettingsContext);
