import { ChangeEvent, Dispatch, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import bellIcon from '@app/assets/images/icons/bell.svg';
import filterIcon from '@app/assets/images/icons/filter.svg';
import searchIcon from '@app/assets/images/icons/search.svg';
import { FiltersState, parseUrlToFilters } from '@app/models/filters.model';
import { updateFilters } from '@app/stores/filters.store';
import ButtonGreen from '@app/ui/components/button/ButtonGreen/ButtonGreen';
import ButtonOutlined from '@app/ui/components/button/buttonOutlined/ButtonOutlined';
import { TEXTS } from '@app/ui/utils/portal-texts';
import { Grid } from '@mui/material';

import './SearchField.scss';

interface PropsSearchField {
  filters: FiltersState;
  onClickFilters: () => void;
  openCreateAlert: () => void;
  onClickAdvenced: () => void;
}

const SearchField = ({onClickFilters, openCreateAlert, onClickAdvenced, filters}: PropsSearchField) => {
  const dispatch = useDispatch();
  const [query, setQuery] : [string, Dispatch<string>] = useState('');

  useEffect(() => {
    setQuery(filters.query as string || '');
  }, [filters]);

  useEffect(() => {
    if (window.location.search) {
      const urlFilters = parseUrlToFilters();
      setQuery(urlFilters.query as string || '');
    }
  }, []);

  const updateQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateFilters({query: query}));
  };

  return (
    <Grid container item className='container search-field top-space' sm={12} justifyContent='center'>
      <Grid container item sm={6} xs={12} className='search-field-container' justifyContent='center'>
        <div className='field-area'>
          <Grid container justifyContent='space-between'>
            <div className='key-words'>{TEXTS.searchPage.searchfield.title}</div>
            <div onClick={onClickAdvenced} className='hover-animation advanced-search'>
              {TEXTS.searchPage.searchfield.advanced}
            </div>
          </Grid>
          <form onSubmit={onSubmit}>
            <img src={searchIcon} className='search-img' alt='icone de lupa'/>
            <input
              value={query}
              onChange={updateQuery}
              className='search-input'
              type='text'
              placeholder={TEXTS.searchPage.searchfield.label}
            />
          </form>
          <div className='only-mobile'>
            <Grid container justifyContent='space-between' className='buttons'>
              <ButtonGreen onClick={onClickFilters} classes='mobile-button-class'>
                <Grid container  justifyContent='space-between'>
                  <img src={filterIcon} className='button-icon' alt='filtrar'/>
                  <div className='filter-button'>{TEXTS.searchPage.searchfield.filter}</div>
                </Grid>
              </ButtonGreen>
              <ButtonOutlined onClick={openCreateAlert} classes='mobile-button-class'>
                <Grid container justifyContent='space-between'>
                  <img src={bellIcon} className='button-icon' alt='criar alerta'/>
                  <div className='alert-button'>{TEXTS.searchPage.searchfield.createAlert}</div>
                </Grid>
              </ButtonOutlined>
            </Grid>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default SearchField;

