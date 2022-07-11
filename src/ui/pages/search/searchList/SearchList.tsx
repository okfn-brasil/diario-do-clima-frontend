import { FormControl, Grid, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { h3Style } from '@app/ui/utils/generalStyles';
import EmptySearch from '@app/assets/images/icons/empty-search.svg';
import { gray, gray5 } from '@app/ui/utils/colors';
import { ReportModel } from '@app/models/reports.model';
import SearchItem from './searchItem/SearchItem';
import ButtonOutlined from '@app/ui/components/button/buttonOutlined/ButtonOutlined';
import bellIcon from '@app/assets/images/icons/black-bell.svg';
import { mobileButtonStyle } from '../search.styles';
import { selectIcon } from '@app/ui/utils/forms.utils';
import { updateFilters } from '@app/stores/filters.store';
import { Dispatch, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/stores/store';
import { FiltersState } from '@app/models/filters.model';

interface PropsSearchList {
  list?: ReportModel[];
  listSize?: number;
  isDesktop: boolean;
}

const SearchList = ({list, listSize, isDesktop}: PropsSearchList) => {
  const filters: FiltersState = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();
  const [order, setOrder] : [string, Dispatch<string>] = useState(filters.order as string);

  const updateOrder = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setOrder(value);
    dispatch(updateFilters({order: value}));
  }

  return (
    <Grid container justifyContent='center' className='container'>
      <Grid item sm={10}>
        {listSize ? 
          <div>
            <h3 style={{...h3Style, margin: '0 0 24px'}}>{listSize} resultados encontrados</h3>
          </div>
          :
          <Grid container justifyContent='center' className='container' style={{height: '560px'}}>
            <div>
              <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '56px'}} >
                <img src={EmptySearch} style={{width: '100px', height: '100px', margin: '24px 0 56pxpx'}} alt='logo - sem resultados na lista'/>
              </div>
              <div style={{ width: '100%'}}>
                <h3 style={{...h3Style, maxWidth: '580px', color: gray, margin: '0', textAlign: 'center'}}>Busque por palavras-chave ou utilize os filtros para encontrar resultados</h3>
              </div>
            </div>
          </Grid>
        }
        { listSize && isDesktop ? 
          <Grid item container sm={12} justifyContent='space-between'>
          <span className='hover-animation'>
            <ButtonOutlined sx={{...mobileButtonStyle, width: '180px', fontWeight: '600', color: gray5}}>
              <Grid container justifyContent='space-between'>
                <img src={bellIcon} style={{width: '24px'}}/>
                <div style={{paddingTop: '2px',width: 'calc(100% - 24px)'}}>Criar alerta</div>
              </Grid>
            </ButtonOutlined>
          </span>

          <FormControl className='form-select half-width' sx={{marginTop: '10px', width: '200px'}}>
              <Select 
                variant='standard' 
                IconComponent={selectIcon} 
                value={order} 
                name='order' 
                onChange={updateOrder} 
              >
                <MenuItem value={'recente'}>Mais recente</MenuItem>
                <MenuItem value={'menor'}>Menor</MenuItem>
                <MenuItem value={'maior'}>Maior</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          : <></>
        }
        <div>
          {list?.map((item: ReportModel) => <SearchItem key={item.id} data={item}/>)}
        </div>
        
      </Grid>
    </Grid>
    );
}

export default SearchList;