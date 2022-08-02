import badge from '@app/assets/images/icons/badge.svg';
import homeWork from '@app/assets/images/icons/home_work.svg';
import ButtonGreen from '@app/ui/components/button/ButtonGreen/ButtonGreen';
import { TEXTS } from '@app/ui/utils/portal-texts';
import { urls } from '@app/ui/utils/urls';
import { Grid } from '@mui/material';

import SimulationForm from './simulation/Simulation';

import './Reports.scss';

const ReportsPage = () => {
  return (
    <div className='reports-page'>
      <Grid container item className='container top-space header-area' sm={12} justifyContent='center'>
        <Grid container item sm={8}>
          <div className='vertical-spacing-container'>
            <div className='h2-class'>
              {TEXTS.reportsPage.title}
            </div>
            <p className='paragraph-class'>
              {TEXTS.reportsPage.subtitle}
            </p>
            <a href={urls.reports.url + '#orcamento-form'}>
              <ButtonGreen >
                {TEXTS.reportsPage.simulateButton}
              </ButtonGreen>
            </a>
          </div>
        </Grid>
      </Grid>
      <Grid container item className='container icons-area' sm={12} justifyContent='center'>
        <Grid container item sm={8} className='vertical-spacing-container' justifyContent='space-between'>
          <div className='icon-wrapper'>
            <div className='icon-class'>
              <img src={badge} alt='icone de crachá'/>
            </div>
            <div className='icon-text'>
              <div className='icon-wrapper-title'>{TEXTS.reportsPage.professionals}</div>
              <div className='icon-wrapper-sub-title'>{TEXTS.reportsPage.professionalsDesc}</div>
            </div>
          </div>
          <div className='icon-wrapper'>
            <div className='icon-class'>
              <img src={homeWork} alt='icone de prédios'/>
            </div>
            <div className='icon-text'>
              <div className='icon-wrapper-title'>{TEXTS.reportsPage.organizations}</div>
              <div className='icon-wrapper-sub-title'>{TEXTS.reportsPage.organizationsDesc}</div>
            </div>
          </div>
        </Grid>
      </Grid>

        
      <Grid container item className='container gray-area' sm={12} justifyContent='center'>
        <Grid container item sm={8} className='vertical-spacing-container'>
          <Grid container justifyContent='space-between'>
            <div className='report-card-class'>
              <h3 className='h3-class'>{TEXTS.reportsPage.reportTitle}</h3>
              <p className='card-paragraph'>{TEXTS.reportsPage.report1Desc}</p>
              <a className='hover-animation'>
                <ButtonGreen classess='card-button'>
                  {TEXTS.reportsPage.reportButton}
                </ButtonGreen>
              </a>
            </div>
            <div className='report-card-class'>
              <h3 className='h3-class'>{TEXTS.reportsPage.reportTitle}</h3>
              <p className='card-paragraph'>{TEXTS.reportsPage.report2Desc}</p>
              <a className='hover-animation'>
                <ButtonGreen classess='card-button'>
                  {TEXTS.reportsPage.reportButton}
                </ButtonGreen>
              </a>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item className='gray-area' justifyContent='center' sm={12} id='orcamento-form'>
        <div className='vertical-spacing-container form-container'>
          <SimulationForm />
        </div>
      </Grid>

      <Grid container item className='container doubts' sm={12} justifyContent='center'>
        <Grid item sm={8} className='vertical-spacing-container'>
          <h3 className='h3-class-sx-margin'>{TEXTS.reportsPage.doubts}</h3>
          <p className='paragraph-class'>{TEXTS.reportsPage.knowMore}
            <a href={`mailto:${TEXTS.contactEmail}`}><span className='hover-animation'> {TEXTS.reportsPage.contact} </span></a> 
            {TEXTS.reportsPage.contactDesc}
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReportsPage;

