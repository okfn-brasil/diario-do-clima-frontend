import { Grid } from '@mui/material';
import searchImage from '@app/assets/images/startSearch/start-search.jpg';
import ButtonGreen from '@app/ui/components/button/ButtonGreen';
import { Link } from 'react-router-dom';
import { fontTitle3Black, fontRoboto } from '@app/ui/utils/fonts';
import { urls } from '@app/ui/utils/urls';
import { useSelector } from 'react-redux';
import { UserState } from '@app/stores/user.store';
import { RootState } from '@app/stores/store';

interface PropsStartSearch {
  isDesktop: boolean;
}

const StartSearch = ({isDesktop}: PropsStartSearch) => {
  const userData: UserState = useSelector((state: RootState) => state.user);
  
  return (
    <Grid container className='container' style={{minHeight: 'calc(100vh - 80px - 176px)', display: 'flex', alignItems: 'center'}}>
      <Grid item container xs={0} sm={4}></Grid>
      <Grid item xs={12} sm={4} >
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <div style={{width: isDesktop ? '377px' : '337px'}}>
            <img style={{width: '100%'}} src={searchImage}/>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{...fontTitle3Black, marginTop: '32px', marginBottom: '16px'}}>Vamos começar a buscar!</p>
          <p style={{...fontRoboto, fontSize: '18px', marginBottom: '32px', marginTop: '0'}}>
            { userData && userData.plan_pro ? 
              'Pronto, agora você pode utilizar todos as funcionalidades disponíveis no nosso plano PRO' :
              'Pronto, agora você já pode utilizar o Diário do Clima para encontrar uma política ambiental'
            }
          </p>
        </div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '50px'}}>
          <Link to={urls.search.url}><ButtonGreen>Começar a buscar</ButtonGreen></Link>
        </div>
      </Grid>
    </Grid>
  );
}

export default StartSearch;
