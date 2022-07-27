import { ChangeEvent } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Theme } from '@app/models/filters.model';
import HelpIcon from '@app/ui/components/helpIcon/HelpIcon';
import ProFlag from '@app/ui/components/proFlag/ProFlag';
import { TEXTS } from '@app/ui/utils/portal-texts';
import { urls } from '@app/ui/utils/urls';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import './ThemeFilter.scss';

interface ThemeFilterProps {
  options: Theme;
  hasProPlan: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ThemeFilter = ({onChange, options, hasProPlan}: ThemeFilterProps) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      <section className='section-filter-class theme-filter' onClick={() => !hasProPlan ? navigate(urls.becomePro.url) : null}>
        <h3 className='h3-class'>
          {TEXTS.searchPage.filters.themeTitle} <HelpIcon />
          <ProFlag spaceBottom={2} show={!hasProPlan}/>
        </h3>
        <p>{TEXTS.searchPage.filters.themeSubtitle}</p>
        <div>
          <FormGroup>
            {Object.keys(options as Theme).map((key: string) => {
              return (<FormControlLabel 
                key={key} 
                disabled={!hasProPlan}
                control={<Checkbox 
                  checked={!!(options)[key]} 
                  name={key} 
                  onChange={(e) => {hasProPlan ? onChange(e) : {};}} 
                />} 
                label={key} 
              />);}
            )}
          </FormGroup>
        </div>
      </section>
    </>
  );
};

export default ThemeFilter;