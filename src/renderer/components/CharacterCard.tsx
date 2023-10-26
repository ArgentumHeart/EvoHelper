import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Class } from '../../main/load';
import { useCharacterContext } from '../../context';
import { EvoStash } from './Stash';
import { Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useSettingsContext } from '../../settingsContext';

interface CharacterCardProps {
  character: Class;
  favourite?: boolean;
}
export function CharacterCard({ character, favourite }: CharacterCardProps) {
  const navigate = useNavigate();
  const { addFavouriteClass, removeFavouriteClass } = useSettingsContext();
  const { onLoadClick } = useCharacterContext();
  return (
    <Box sx={{ padding: '10px' }}>
      <Card sx={{ width: 280, padding: '15px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '10px'
          }}
        >
          <Typography
            onClick={() => {
              navigate(`/character/${character.hero}`);
            }}
            sx={{ cursor: 'pointer' }}
            variant="body1"
          >
            {character.hero} [{character.level}]
          </Typography>
          <IconButton onClick={() => !favourite ? addFavouriteClass(character.hero) : removeFavouriteClass(character.hero)}>
            {favourite ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
        </Box>
        <Box sx={{ paddingBottom: '10px' }}>
          <EvoStash
            sx={{ display: 'flex', flexDirection: 'row', gap: '2px' }}
            itemIds={character.inventory}
          />
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Button variant="contained" onClick={() => onLoadClick(character)}>
            Load
          </Button>
          <Button onClick={() => {
            navigate(`/character/${character.hero}`);
          }}>
            Details
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
