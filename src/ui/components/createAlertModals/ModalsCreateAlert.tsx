
import React, { Dispatch, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { convertFiltersToModalFilters, FiltersStatePayload, ModalFilters } from '@app/models/filters.model';
import { UserState } from '@app/models/user.model';
import { RootState } from '@app/stores/store';

import ModalAlertFilters from './modalAlertFilters/ModalAlertFilters';
import ModalBecomePro from './modalBecomePro/ModalBecomePro';
import ModalSetAlertSpec from './modalSetAlertSpec/ModalSetAlertSpec';

import './ModalsCreateAlert.scss';
import ModalKeyWords from './modalKeyWords/ModalKeyWords';
import { parseQuery } from './utils';
import ModalEmail from './modalEmail/ModalEmail';
import ModalCreated from './modalCreated/ModalCreated';

interface ModalCreateAlertProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  filters: FiltersStatePayload;
}

const ModalsCreateAlert = ({isOpen, onClose, onOpen, filters}: ModalCreateAlertProps) => {
  const userData: UserState = useSelector((state: RootState) => state.user as UserState);
  const [isOpenBecomePro, setStateBecomePro] : [boolean, Dispatch<boolean>] = useState(false);
  const [isOpenFilters, setStateFilters] : [boolean, Dispatch<boolean>] = useState(false);
  const [isOpenKeyWords, setStateKeyWords] : [boolean, Dispatch<boolean>] = useState(false);
  const [isOpenEmail, setStateEmailModal] : [boolean, Dispatch<boolean>] = useState(false);
  const [isOpenSuccess, setStateSuccess] : [boolean, Dispatch<boolean>] = useState(false);
  const [definedFilters, setdefinedFilters] : [ModalFilters, Dispatch<ModalFilters>] = useState({});
  const [query, setQuery] : [string, Dispatch<string>] = useState('');
  const [email, setEmail] : [string, Dispatch<string>] = useState('');
  const [emptyFields, setEmptyFields] : [number, Dispatch<number>] = useState(0);

  useEffect(() => {
    setdefinedFilters(convertFiltersToModalFilters(filters));
    setQuery(parseQuery(filters.query as string));
  },[filters]);

  const onOpenBecomePro = () => {
    onClose();
    setStateBecomePro(true);
  };

  //filters
  const onClickFilters = () => {
    onClose();
    setStateFilters(true);
  };

  const onBackFilters = () => {
    setStateFilters(false);
    onOpen();
  };

  const onApplyFilters = (filters: FiltersStatePayload) => {
    setdefinedFilters(convertFiltersToModalFilters(filters));
    setStateFilters(false);
    onOpen();
  };

  //key words
  const onClickKeyWords = () => {
    onClose();
    setStateKeyWords(true);
  };

  const onBackKeyWords = () => {
    setStateKeyWords(false);
    onOpen();
  };

  const onApplyKeyWords = (queryApply: string) => {
    setQuery(queryApply)
    setStateKeyWords(false);
    onOpen();
  };

  //email
  const onClickEmail = () => {
    onClose();
    setStateEmailModal(true);
  };

  const onBackEmail = () => {
    setStateEmailModal(false);
    onOpen();
  };

  const onApplyEmail = (email: string) => {
    setEmail(email);
    setStateEmailModal(false);
    onOpen();
  };

  //submit
  const onSubmit = () => {
    onClose();
    setStateSuccess(true);
  }

  const restart = () => {
    setStateSuccess(false);
    onOpen();
    setQuery('');
    setdefinedFilters({});
    setEmptyFields(Math.random());
  }
  return (
    <>
      <ModalSetAlertSpec 
        filters={definedFilters} 
        query={query} 
        onClickEmail={onClickEmail} 
        onClickKeyWords={onClickKeyWords} 
        openBecomePro={onOpenBecomePro} 
        onClickFilters={onClickFilters} 
        onSubmit={onSubmit}
        userData={userData}
        email={email}
        onClose={onClose} 
        isOpen={isOpen}
      />
      <ModalEmail isOpen={isOpenEmail} onBack={onBackEmail} onApply={onApplyEmail} userEmail={userData.email as string}/>
      <ModalKeyWords filters={filters} emptyFields={emptyFields}  isOpen={isOpenKeyWords} onBack={onBackKeyWords} onApply={onApplyKeyWords}/>
      <ModalAlertFilters filters={filters} emptyFields={emptyFields}  isOpen={isOpenFilters} onApply={onApplyFilters} onBack={onBackFilters}/>
      <ModalBecomePro isOpen={isOpenBecomePro} onClose={() => setStateBecomePro(false)}/>
      <ModalCreated isOpen={isOpenSuccess} onCreateAnother={restart} onClose={() => setStateSuccess(false)}/>
    </>
  );
};

export default ModalsCreateAlert;
