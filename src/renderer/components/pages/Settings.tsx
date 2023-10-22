import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { useSettingsContext } from '../../../settingsContext';

export default function Settings() {
  const {
    wc3path,
    battleTag,
    extraLines,
    onlyT4Classes,
    setOnlyT4Classes,
    setExtra,
    setBattleTag,
    setWc3path,
  } = useSettingsContext();
  const onSave = () => {
    window.electron.ipcRenderer.sendMessage('settings_write', {
      wc3path,
      battleTag,
      extraLines,
      onlyT4Classes,
    });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 20px 0 0px',
        gap: '15px',
      }}
    >
      <h3>Settings</h3>
      <TextField
        value={wc3path}
        onChange={(e) => setWc3path(e.target.value)}
        id="path"
        label="Warcraft documents path"
        variant="standard"
      />
      <TextField
        value={battleTag}
        onChange={(e) => setBattleTag(e.target.value)}
        id="tag"
        label="Battle tag"
        variant="standard"
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography>Show only t4 classes</Typography>
        <Switch
          value={onlyT4Classes}
          onChange={(e) => setOnlyT4Classes(e.target.checked)}
        />
      </Box>
      <TextField
        value={extraLines}
        onChange={(e) => setExtra(e.target.value)}
        id="extra"
        label="extra lines"
        variant="standard"
        multiline
        maxRows={10}
      />
      <Box sx={{ padding: '10px' }}>
        <Button onClick={onSave} sx={{ width: '100px' }}>
          Save
        </Button>
      </Box>
    </Box>
  );
}
