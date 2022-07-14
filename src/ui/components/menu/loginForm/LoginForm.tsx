import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ShowPassIcon from '@app/assets/images/icons/show-pass.svg';
import DiarioLogoBlack from '@app/assets/images/logo-black.svg';
import { LoginModel, LoginResponse } from '@app/models/login.model';
import { UserResponseModel } from '@app/models/user.model';
import AccountService, { checkPlan } from '@app/services/accounts';
import LoginService from '@app/services/login';
import { userUpdate } from '@app/stores/user.store';
import SubmitForm from '@app/ui/components/forms/submitForm/SubmitForm';
import Loading from '@app/ui/components/loading/Loading';
import { urls } from '@app/ui/utils/urls';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, Input } from '@mui/material';

import './LoginForm.scss';

interface PropsLoginForm{
  showLoginForm: (e: boolean) => void;
}

const LoginForm = ({showLoginForm}: PropsLoginForm) => {
  const dispatch = useDispatch();
  const loginService = new LoginService();
  const accountService = new AccountService();
  const [passFieldType, setPassType]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(true);
  const [isLoading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const [error, setError]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const [inputs, setInputs] : [LoginModel, Dispatch<SetStateAction<LoginModel>>] = useState({
    email: '',
    password: '',
  });

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setInputs((values: LoginModel) => ({...values, [name]: value}));
  };

  const changeFieldType = () => {
    setPassType(!passFieldType);
  };

  const closeModal = () => {
    showLoginForm(false);
  };
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(false);
    setLoading(true);
    loginService.login(inputs).then((response: LoginResponse) => {
      dispatch(userUpdate({
        access: response.access,
        refresh: response.refresh,
      }));
      getUserData();
    }).catch(() => {
      setLoading(false);
      setError(true);
    });
  };

  const getUserData = () => {
    accountService.getUserData().then(
      (response: UserResponseModel) => {
        dispatch(userUpdate({
          id: response.id,
          full_name: response.full_name,
          plan_pro: checkPlan(response),
        }));
        setLoading(false);
        closeModal();
      }).catch(() => {
      setLoading(false);
      setError(true);
    });
  };

  return (
    <div className='login-form'>
      <Loading isLoading={isLoading}></Loading>
      <Grid container justifyContent='center'>
        <Grid item xs={12} sm={5} className='container login-modal'>
          <div>
            <CloseIcon className='hover-animation close-icon' onClick={closeModal} />
          </div>
          <hr className='thin-line' />
          <div>
            <img className='logo' src={DiarioLogoBlack}/>
          </div>
          <p className='h3-class'>Acesse sua conta</p>
          <p className='paragraph-class'>Lorem ipsum sit amet consectetur</p>

          <form onSubmit={handleSubmit}>
            <Input required type='email' value={inputs.email} className='input-class' name='email' onChange={inputChange} placeholder='E-mail' />
            
            <div className='password-field'>
              <img className={'hover-animation ' + (passFieldType ? 'low-opacity' : '')} src={ShowPassIcon} onClick={changeFieldType} />
              <Input required type={passFieldType ? 'password' : 'text'} value={inputs.password} className='input-class' name='password' onChange={inputChange} placeholder='Senha' />
            </div>
            
            <div className='submit-login'>
              <SubmitForm  disabled={isLoading} />
            </div>
          </form>

          {error ? 
            <div className='error'>
              Ocorreu um erro ao tentar logar em sua conta, por favor, verifique os dados e tente novamente.
            </div> 
            : <></>
          }

          <div>
            <div className='registration-link'>
              Não possui uma conta?
              <Link to={urls.registration.url} onClick={closeModal} className='hover-animation'>
                <span className='blue-link'>
                  Faça o cadastro
                </span>
              </Link>
            </div> 
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginForm;
