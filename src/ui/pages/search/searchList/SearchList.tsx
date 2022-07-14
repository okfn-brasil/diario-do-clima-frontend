import { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bellIcon from '@app/assets/images/icons/black-bell.svg';
import EmptySearch from '@app/assets/images/icons/empty-search.svg';
import { FiltersState, parseUrlToFilters } from '@app/models/filters.model';
import { ReportModel } from '@app/models/reports.model';
import { updateFilters } from '@app/stores/filters.store';
import { RootState } from '@app/stores/store';
import ButtonOutlined from '@app/ui/components/button/buttonOutlined/ButtonOutlined';
import SelectInput from '@app/ui/components/forms/select/Select';
import { Grid, SelectChangeEvent } from '@mui/material';

import SearchItem from './searchItem/SearchItem';

import './SearchList.scss';

interface PropsSearchList {
  list?: ReportModel[];
  listSize?: number;
  searchTimes: number;
  openCreateAlert: () => void;
}

const SearchList = ({list, listSize, searchTimes, openCreateAlert}: PropsSearchList) => {
  const filters: FiltersState = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();
  const [order, setOrder] : [string, Dispatch<string>] = useState(filters.order as string);

  const updateOrder = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setOrder(value);
    dispatch(updateFilters({order: value}));
  };

  useEffect(() => {
    if (window.location.search) {
      const urlFilters = parseUrlToFilters();
      setOrder(urlFilters.order as string);
    }
  }, []);

  return (
    <Grid container justifyContent='center' className='container search-list'>
      <Grid item sm={10}>
        {listSize ? 
          <div>
            <h3 className='h3-class title'>{listSize} resultados encontrados</h3>
          </div>
          : <></>
        }
        { listSize ? 
          <div className='only-desktop' >
            <Grid item container sm={12} justifyContent='space-between'>
              <span className='hover-animation'>
                <ButtonOutlined onClick={openCreateAlert} classess='create-alert-button'>
                  <Grid container justifyContent='space-between'>
                    <img src={bellIcon}/>
                    <div className='alert-button'>Criar alerta</div>
                  </Grid>
                </ButtonOutlined>
              </span>
              <SelectInput
                classes='half-width'
                options={[{value: 'recente', label: 'Mais recente'},{value: 'menor', label: 'Menor'}, {value: 'maior', label: 'Maior'}]} 
                placeholder='Selecione um munícipio' 
                value={order} 
                name='order'
                onChange={updateOrder}
              />
            </Grid>
          </div>
          : <></>
        }
        {
          !listSize && searchTimes <= 1 ? 
            <Grid container justifyContent='center' className='container empty-list'>
              <div>
                <div className='image-area' >
                  <img src={EmptySearch} alt='logo - sem resultados na lista'/>
                </div>
                <div className='text-area'>
                  <h3 className='h3-class'>Busque por palavras-chave ou utilize os filtros para encontrar resultados</h3>
                </div>
              </div>
            </Grid>
            : <></>
        }

        {
          !listSize && searchTimes > 1 ? 
            <Grid container justifyContent='center' className='container empty-list'>
              <div>
                <div className='text-area'>
                  <h3 className='h3-class'>Nenhum resultado foi encontrado para sua busca.</h3>
                </div>
              </div>
            </Grid>
            : <></>
        }
        <div>
          {list?.map((item: ReportModel) => <SearchItem key={item.id} data={item}/>)}
        </div>
        
      </Grid>
    </Grid>
  );
};

export default SearchList;
