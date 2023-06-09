import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FiltersStatePayload } from '@app/models/filters.model';
import { Option } from '@app/models/forms.model';
import ButtonGreen from '@app/ui/components/button/ButtonGreen/ButtonGreen';
import EntityFilter from '@app/ui/components/filters/entityFilter/EntityFilter';
import LocationFilter from '@app/ui/components/filters/locationFilter/LocationFilter';
import ThemeFilter from '@app/ui/components/filters/themeFilter/ThemeFilter';
import Modal from '@app/ui/components/modal/Modal';
import { TEXTS } from '@app/ui/utils/portal-texts';
import { SelectChangeEvent } from '@mui/material';

import { initialFilters } from '../utils';

import './ModalAlertFilters.scss';

interface ModalAlertFiltersProps {
  isOpen: boolean;
  onBack: () => void;
  onApply: (filters: FiltersStatePayload) => void;
  filters: FiltersStatePayload;
  emptyFields: number;
}

const ModalAlertFilters = ({isOpen, emptyFields, onBack, onApply, filters}: ModalAlertFiltersProps) => {
  const [currFilters, setFilters] : [FiltersStatePayload, Dispatch<SetStateAction<FiltersStatePayload>>] = useState(initialFilters);

  useEffect(() => {
    setFilters(initialFilters);
  }, [emptyFields]);

  useEffect(() => {
    setFilters(filters);
  }, [filters]);

  const inputLocationChange = (name: string, newValues: Option[]) => {
    setFilters((values: FiltersStatePayload) => ({...values, [name]: newValues.map(item => item.value)}));
  };

  const checkBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = event.target;
    
    setFilters((values: FiltersStatePayload) => ({...values, themes: {
      ...values.themes,
      [name]: checked
    }}));
  };

  const entitiesCheckBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = event.target;
    
    setFilters((values: FiltersStatePayload) => ({...values, ente: {
      ...values.ente,
      [name]: checked
    }}));
  };

  const apply = () => {
    onApply(currFilters);
  };

  const keyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.key === 'Enter' ? apply() : null;
  };

  return (
    <Modal isOpen={isOpen} title={'Editar filtros do alerta'} onBack={onBack} className='create-alert'>
      <div onKeyUp={keyUp}>
        <div className='modal-filters'>
          <LocationFilter onChange={inputLocationChange} value={currFilters.territory_id as string}/>

          <ThemeFilter themesFilter={currFilters.themes} onChange={checkBoxChange} hasProPlan={true} />
        
          <EntityFilter entityFilter={currFilters.ente} onChange={entitiesCheckBoxChange}/>

          <ButtonGreen classes='modal-filter-apply' fullWidth onClick={apply}>{TEXTS.filters.applyFilters}</ButtonGreen>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAlertFilters;
