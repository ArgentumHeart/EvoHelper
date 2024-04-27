import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import CachedIcon from '@mui/icons-material/Cached';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Settings from './pages/Settings';
import { Character } from './components/Character';
import theme from './theme';
import { useCharacterContext } from '../context';
import { ItemsPage } from './pages/ItemsPage';
import { LoaderPage } from './pages/LoaderPage';
import { ItemPage } from './pages/ItemPage';
import { FishingPage } from './pages/FishingPage';

export default function App() {
  const { loadClasses } = useCharacterContext();
  loadClasses();

  return (
    <Router initialEntries={[ '/characters' ]}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Box
            component="div"
            sx={{
              justifyContent: 'space-between',
              flexDirection: 'column',
              display: 'flex',
              minWidth: '220px',
              height: '100vh',
              position: 'relative',
            }}
          >
            <Box>
              <Box
                sx={{
                  height: '50px',
                  padding: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography>Evo Helper 0.6.0</Typography>
                <IconButton onClick={loadClasses}>
                  <CachedIcon />
                </IconButton>
              </Box>
              <MenuList>
                <MenuItem component={Link} to="/characters">
                  Loader
                </MenuItem>
                <MenuItem component={Link} to="/items">
                  Items
                </MenuItem>
                <MenuItem component={Link} to="/fishing">
                  Fishing
                </MenuItem>
              </MenuList>
            </Box>
            <Box sx={{ width: '100%', backgroundColor: '#121212' }}>
              <Divider />
              <MenuItem component={Link} to="/settings">
                Settings
              </MenuItem>
            </Box>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
              padding: '20px',
              background: theme.palette.grey[900],
            }}
          >
            <Box sx={{ maxWidth: '105ch' }}>
            <Routes>
              <Route path="/items" element={<ItemsPage/>}/>
              <Route path="/item/:id" element={<ItemPage/>}/>
              <Route path="/characters" element={<LoaderPage />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/fishing" element={<FishingPage />} />
              <Route path="/character/:id" element={<Character />} />
            </Routes>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}
