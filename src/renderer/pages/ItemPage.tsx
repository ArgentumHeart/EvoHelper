import { Link, useParams } from 'react-router-dom';
import { evoItems } from '../../constants/items';
import { EvoItem } from '../components/Item';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export function ItemPage() {
  const { id } = useParams();
  if (!id || !evoItems.hasOwnProperty(id)) {
    return <h2>How did you end up here?</h2>
  }
  
  const navigate = useNavigate();

  return (
    <div>
      <IconButton style={{ left: -10 }} onClick={() => navigate(-1)}>
        <ArrowBackIcon />
        <Typography variant="caption"/>
      </IconButton>
      <EvoItem item={
        // @ts-ignore
        evoItems[id]
      }/>
    </div>
  );
}