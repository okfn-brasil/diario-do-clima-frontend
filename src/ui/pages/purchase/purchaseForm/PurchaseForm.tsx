import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { InputModel, InputType, ValidationInputModel } from '@app/models/forms.model';
import { FormPurchaseModel, getCardType, Plan } from '@app/models/purchase.model';
import BillingService from '@app/services/billing';
import { userUpdate } from '@app/stores/user.store';
import TextInput from '@app/ui/components/forms/input/Input';
import SelectInput from '@app/ui/components/forms/select/Select';
import Loading from '@app/ui/components/loading/Loading';
import WarnModal from '@app/ui/components/warn-modal/WarnModal';
import { getInputWithoutMask, homePhoneMask, inputValidation, mobilePhoneMask } from '@app/ui/utils/form.utils';
import { TEXTS } from '@app/ui/utils/portal-texts';
import { urls } from '@app/ui/utils/urls';
import { Grid } from '@mui/material';

import PurchaseDetails from '../purchaseDetails/PurchaseDetails';
import PurchaseSubmit from '../purchaseSubmit/PurchaseSubmit';

import './PurchaseForm.scss';
import { is_cpf } from '@app/ui/utils/functions.utils';


const inputsDefaultValue: FormPurchaseModel = {
  card: { value: '' },
  fullName: { value: '' },
  validity: { value: '' },
  cvv: { value: '' },
  address: { value: '' },
  city: { value: '' },
  state: { value: '' },
  cep: { value: '' },
  birthday: { value: '' },
  cpf: { value: '' },
  phone: { value: '' },
  district: { value: '' },
  complement: { value: '' },
  number: { value: '' },
};

const validateDate = (value: string, minMaxValidation: (d: Date) => boolean) => {
  if(!value) { return; }
  const dateArray = value.split('/');
  const year = dateArray[dateArray.length - 1];
  const month = dateArray[dateArray.length - 2];
  const day = dateArray[dateArray.length - 3] || 1;
  const newDate: Date = new Date(`${month}/${day}/${year}`);
  return newDate.toString() === 'Invalid Date' || minMaxValidation(newDate) ? 'A data inserida é inválida' : false;
};

const getCardValue = (value: string) => {
  return getInputWithoutMask(value.replace(/ /g,''));
};

const cardValidation = (value: string, text: string) => {
  return !getCardType(getCardValue(value)) ? text : false;
};

const fieldValidations: ValidationInputModel = {
  card: (s: InputModel) => { return cardValidation(s.value, 'O cartão inserido é inválido');},
  fullName: (s: InputModel) => { return inputValidation(s.value, 8, 'O campo deve possuir no mínimo 8 caracteres');},
  cvv: (s: InputModel) => { return inputValidation(s.value, 3, 'O CVV inserido é inválido');},
  address: (s: InputModel) => { return inputValidation(s.value, 5, 'O campo deve possuir no mínimo 5 caracteres');},
  number: (s: InputModel) => { return inputValidation(s.value, 7, 'O campo deve possuir no máximo 7 caracteres', true);},
  city: (s: InputModel) => { return inputValidation(s.value, 5, 'O campo deve possuir no mínimo 5 caracteres');},
  district: (s: InputModel) => { return inputValidation(s.value, 5, 'O campo deve possuir no mínimo 5 caracteres');},
  cep: (s: InputModel) => { return inputValidation(s.value, 8, 'O CEP inserido é inválido');},
  cpf: (s: InputModel) => { return is_cpf(s.value) ? false : 'O CPF inserido é inválido';},
  phone: (s: InputModel) => { return inputValidation(s.value, 11, 'O número de telefone inserido é inválido');},
  birthday: (s: InputModel) => { return validateDate(s.value, (value: Date) => !(new Date() > value));},
  validity: (s: InputModel) => { return validateDate(s.value, (value: Date) => !(new Date() < value));},
};

interface PurchaseFormInterface {
  isModal?: boolean;
  onSubmit?: () => void;
  filledFields?: FormPurchaseModel;
}

const PurchaseForm = ({isModal, onSubmit, filledFields}: PurchaseFormInterface) => {
  const dispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();
  const billingService = new BillingService();
  const [inputs, setInputs] : [FormPurchaseModel, Dispatch<SetStateAction<FormPurchaseModel>>] = useState(filledFields || inputsDefaultValue);
  const [submitForm, setSubmitForm] : [FormPurchaseModel, Dispatch<SetStateAction<FormPurchaseModel>>] = useState(filledFields || inputsDefaultValue);
  const [phoneMask, setPhoneMask] : [string, Dispatch<SetStateAction<string>>] = useState(homePhoneMask);
  const [isLoading, setLoading] : [boolean, Dispatch<boolean>] = useState(false);
  const [submitError, setSubmitError] : [string, Dispatch<string>] = useState('');
  const [phoneMethod, setPhoneMethod] : [string, Dispatch<string>] = useState('POST');
  const [addressMethod, setAddressMethod] : [string, Dispatch<string>] = useState('POST');
  const [plan, setPlan] : [Plan, Dispatch<Plan>] = useState({} as Plan);

  useEffect(() => {
    getMethodsType();

    billingService.getPlans().then(response => {
      setPlan(response.results.filter(plan => plan.pagseguro_plan_id)[0]);
    }).catch(() => {
      setPlan({title: TEXTS.purchasePage.getPlanError, id: undefined} as Plan);
    });
  }, []);

  const getMethodsType = () => {
    billingService.getPhone().then(() => {
      setPhoneMethod('PUT');
    }).catch(() => {
      setPhoneMethod('POST');
    });

    billingService.getAddress().then(() => {
      setAddressMethod('PUT');
    }).catch(() => {
      setAddressMethod('POST');
    });
  };

  const getPhoneMask = (name: string, value: string) => {
    if(name === 'phone') {
      const phoneLength = getInputWithoutMask(value).length;
      setPhoneMask(phoneLength <= 11 ? homePhoneMask : mobilePhoneMask);
    }
  };

  const inputChange = (event: InputType) => {
    const {name, value} = event.target;
    getPhoneMask(name, value);
    setInputs((values: FormPurchaseModel) => ({...values, [name]: { value: value, isValid: values[name].isValid }}));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    const errors = [];
    Object.keys(inputs).forEach((key: string) => {
      const input: InputModel = inputs[key];
      const validator = fieldValidations[key] ? fieldValidations[key](input) : false;
      if(inputs[key].value) {
        setInputs((values: FormPurchaseModel) => ({...values, [key]: {...input, errorMessage: validator as string}}));
        if(typeof validator === 'string') {
          errors.push(key);
        }
      }
    });
    if(!errors.length) {
      const newInputs: FormPurchaseModel = {} as FormPurchaseModel;
      Object.keys(inputs).forEach((key: string) => {
        newInputs[key] = { value: key === 'card' ? getCardValue(inputs[key].value): getInputWithoutMask(inputs[key].value)};
      });
      setSubmitForm(newInputs);
      setLoading(true);
    }
  };

  const onError = (errorMessage: string) => {
    setLoading(false);
    setSubmitError(errorMessage);
    getMethodsType();
  };

  const onSuccess = (response: string) => {
    if(!isModal) {
      navigate(urls.startSearch.url);
      setTimeout(() => {
        dispatch(userUpdate({
          plan_subscription: {
            plan: {
              id: plan.title as string,
              title: plan.title as string,
              pagseguro_plan_id: response,
            }
          }
        }));
      }, 200);
    } else if(onSubmit) {
      onSubmit();
    }
  };

  return (
    <>
      <WarnModal isOpen={!!submitError} message={submitError} onClose={() => setSubmitError('')} onCancel={() => location.href = '/'}/>
      <form className='purchase-form' onSubmit={handleSubmit} >
        <PurchaseSubmit plan={plan} phoneMethod={phoneMethod} isModal={isModal} addressMethod={addressMethod} isSubmitting={isLoading} onSuccess={onSuccess} onError={onError} form={submitForm} />
        <Loading isLoading={isLoading}></Loading>
        <Grid item sm={isModal? 12 : 7} xs={12}>
          <div>
            <div className='payment-section-title h3-class'>
              {TEXTS.purchasePage.formTitle}
            </div>
            <Grid container>
              <div className='gray-box'></div>
              <div className='gray-box'></div>
              <div className='gray-box'></div>
              <div className='gray-box'></div>
            </Grid>
            <div>
              <TextInput
                label={TEXTS.purchasePage.labels.card}
                name='card'
                mask='9999 9999 9999 9999'
                error={inputs.card.errorMessage}
                value={inputs.card.value}
                onChange={inputChange}
                required={true}
              />

              <TextInput
                label={TEXTS.purchasePage.labels.name}
                name='fullName'
                error={inputs.fullName.errorMessage}
                value={inputs.fullName.value}
                onChange={inputChange}
                required={true}
              />

              <TextInput
                label={TEXTS.purchasePage.labels.validity}
                mask='99/9999'
                name='validity'
                error={inputs.validity.errorMessage}
                value={inputs.validity.value}
                onChange={inputChange}
                required={true}
              />

              <TextInput
                label={TEXTS.purchasePage.labels.cvv}
                name='cvv'
                error={inputs.cvv.errorMessage}
                value={inputs.cvv.value}
                onChange={inputChange}
                required={true}
                mask='999'
              />

              <Grid container justifyContent='space-between'>
                <TextInput
                  classes='half-width full-width-mobile'
                  label={TEXTS.purchasePage.labels.address}
                  name='address'
                  error={inputs.address.errorMessage}
                  value={inputs.address.value}
                  onChange={inputChange}
                  required={true}
                />
              
                <TextInput
                  classes='half-width full-width-mobile'
                  label={TEXTS.purchasePage.labels.number}
                  name='number'
                  error={inputs.number.errorMessage}
                  value={inputs.number.value}
                  onChange={inputChange}
                  required={true}
                />
              </Grid>

              <Grid container justifyContent='space-between'>
                <TextInput
                  classes='half-width full-width-mobile'
                  label={TEXTS.purchasePage.labels.district}
                  name='district'
                  error={inputs.district.errorMessage}
                  value={inputs.district.value}
                  onChange={inputChange}
                  required={true}
                />

                <TextInput
                  classes='half-width full-width-mobile'
                  label={TEXTS.purchasePage.labels.complement}
                  name='complement'
                  error={inputs.complement.errorMessage}
                  value={inputs.complement.value}
                  onChange={inputChange}
                />
              </Grid>

              <Grid container justifyContent='space-between'>
                <TextInput
                  classes='half-width'
                  label={TEXTS.purchasePage.labels.city}
                  name='city'
                  error={inputs.city.errorMessage}
                  value={inputs.city.value}
                  onChange={inputChange}
                  required={true}
                />

                <SelectInput 
                  classes='half-width state-select' 
                  options={TEXTS.stateList.map(state => {return {value: state, label: state};})} 
                  label={TEXTS.purchasePage.labels.state}
                  value={inputs.state.value} 
                  name='state' 
                  required={true} 
                  onChange={inputChange}
                />
              </Grid>

              <TextInput
                label={TEXTS.purchasePage.labels.cep}
                name='cep'
                error={inputs.cep.errorMessage}
                value={inputs.cep.value}
                onChange={inputChange}
                required={true}
                mask='99999-999'
              />

              <TextInput
                label={TEXTS.purchasePage.labels.cpf}
                name='cpf'
                error={inputs.cpf.errorMessage}
                value={inputs.cpf.value}
                onChange={inputChange}
                required={true}
                mask='999.999.999-99'
              />

              <TextInput
                label={TEXTS.purchasePage.labels.birthday}
                name='birthday'
                error={inputs.birthday.errorMessage}
                value={inputs.birthday.value}
                onChange={inputChange}
                required={true}
                mask='99/99/9999'
              />

              <TextInput
                label={TEXTS.purchasePage.labels.phone}
                name='phone'
                error={inputs.phone.errorMessage}
                value={inputs.phone.value}
                onChange={inputChange}
                required={true}
                mask={phoneMask}
              />
            </div>
          </div>
        </Grid>

        <Grid 
          item 
          sm={isModal? 12 : 4} 
          xs={12}
        >
          <PurchaseDetails plan={plan} isModal={isModal} isLoading={isLoading}/>
        </Grid>
      </form>
    </>
  );
};

export default PurchaseForm;
