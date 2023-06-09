import { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Arrow from '@app/assets/images/icons/arrow-down.svg';
import { PlansResponse } from '@app/models/purchase.model';
import { UserResponseModel, UserState } from '@app/models/user.model';
import AccountService from '@app/services/accounts';
import BillingService from '@app/services/billing';
import { RootState } from '@app/stores/store';
import { userUpdate } from '@app/stores/user.store';
import ButtonGreen from '@app/ui/components/button/ButtonGreen/ButtonGreen';
import ButtonOutlined from '@app/ui/components/button/buttonOutlined/ButtonOutlined';
import InputError from '@app/ui/components/forms/inputError/inputError';
import Loading from '@app/ui/components/loading/Loading';
import { TEXTS } from '@app/ui/utils/portal-texts';
import { urls } from '@app/ui/utils/urls';
import { Grid } from '@mui/material';

import ChangeEmailModal from './changeEmail/ChangeEmail';
import ChangeInfoModal from './changeInfo/ChangeInfo';
import ChangePasswordModal from './changePassword/ChangePassword';
import ChangePaymentModal from './changePayment/ChangePayment';
import CancelPlan from './confirmCancel/ConfirmCancel';

import './UserInfo.scss';
import { AxiosResponse } from 'axios';

interface CurrentPlanInfo {
  nextDate: Date;
  active: boolean;
}

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const ArrowRight = () => {
  return (
    <img src={Arrow} className='right-arrow' alt='avançar'/>
  );
};

const UserInfo = () => {
  const dispatch = useDispatch();
  const billingService = new BillingService();
  const accountService = new AccountService();
  const userData: UserState = useSelector((state: RootState) => state.user as UserState);
  const [cancellingError, setCancellingError] : [string, Dispatch<string>] = useState('');
  const [isLoading, setLoading] : [boolean, Dispatch<boolean>] = useState(false);
  const [error, setError] : [string, Dispatch<string>] = useState('');
  const [currPlanInfo, setCurrPlanInfo] : [CurrentPlanInfo, Dispatch<CurrentPlanInfo>] = useState({} as CurrentPlanInfo);
  const [showChangeEmailModal, setVisibilityEmailModal] : [boolean, Dispatch<boolean>] = useState(false);
  const [showEditInfoModal, setVisibilityInfoModal] : [boolean, Dispatch<boolean>] = useState(false);
  const [showPasswordModal, setVisibilityPassModal] : [boolean, Dispatch<boolean>] = useState(false);
  const [showPaymentModal, setVisibilityPaymentModal] : [boolean, Dispatch<boolean>] = useState(false);
  const [showCancelPlan, setVisibilityCancelPlan] : [boolean, Dispatch<boolean>] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserInfo();
  }, []);

  const getDate = () => {
    const date = new Date(userData.date_joined || '');
    const month = date.getMonth()? months[date.getMonth()] : '';
    const year = date.getFullYear()? date.getFullYear(): '';
    return `${month} de ${year}`;
  };

  const getNextPayment = () => {
    if(currPlanInfo.nextDate) {
      const date = currPlanInfo.nextDate;
      return `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
    } else {
      return '';
    }
  };

  const getPlanInfo = (id: number) => {
    billingService.getCurrentPlan(id).then((response: any) => {
      setCurrPlanInfo({
        active: true,
        nextDate: new Date(response[0].schedulingDate),
      })
      setLoading(false);
    }).catch(() => {
      setError('Ocorreu um erro ao consultar as informações do plano.');
      setLoading(false);
    });
  }

  const getUserInfo = () => {
    accountService.getUserData().then(
      (response: UserResponseModel) => {
        dispatch(userUpdate(response));
        if(response.plan_subscription?.status?.data === 'ACTIVE' && response.plan_subscription?.plan?.pagseguro_plan_id) {
          getPlanInfo(response.plan_subscription.id);
        } else {
          setLoading(false);
        }
      }).catch(() => {
        location.reload();
      });
  };

  const cancelPlan = () => {
    setCancellingError('');
    setLoading(true);
    setVisibilityCancelPlan(false);
    billingService.getPlans().then(response => {
      cancel(response);
    }).catch(() => {
      setLoading(false);
      setCancellingError(TEXTS.myAccount.cancellingError);
    });
  };

  const cancel = (response: PlansResponse) => {
    const freePlan = response.results.filter(plan => !plan.pagseguro_plan_id)[0];
    billingService.postSubscription(freePlan.id as string).then(() => {
      getUserInfo();
    }).catch(() => {
      setLoading(false);
      setCancellingError(TEXTS.myAccount.cancellingError);
    });
  };

  const getRemainingTime = () => {
    if(userData?.plan_subscription?.trial_end_at) {
      const endDate = userData?.plan_subscription?.trial_end_at?.split('-') as string[];
      const date_1 = new Date(`${endDate[1]}/${endDate[2]}/${endDate[0]}`);
      const date_2 = new Date();
      let difference = date_1.getTime() - date_2.getTime();
      return Math.ceil(difference / (1000 * 3600 * 24));
    } else {
      return 0;
    }
  }

  return (
    <Grid container justifyContent='center' className='user-info-page'>
      <CancelPlan isOpen={showCancelPlan} onConfirmCancel={cancelPlan} onClose={() => setVisibilityCancelPlan(false)}/>
      <ChangeEmailModal setLoading={setLoading} defaultEmail={userData.email} isOpen={showChangeEmailModal} onClose={() => {setVisibilityEmailModal(false); getUserInfo();}}/>
      <ChangeInfoModal setLoading={setLoading} userData={userData} isOpen={showEditInfoModal} onClose={() => {setVisibilityInfoModal(false); getUserInfo();}}/>
      <ChangePasswordModal setLoading={setLoading} isOpen={showPasswordModal} onClose={() => {setVisibilityPassModal(false); getUserInfo();}}/>
      <ChangePaymentModal userData={userData} isOpen={showPaymentModal} onClose={() => {setVisibilityPaymentModal(false); getUserInfo();}}/>
      <Loading isLoading={isLoading}></Loading>
      <Grid item sm={7} xs={12} className='container'>
        <div>
          <h2 className='h2-class font-sora'>{TEXTS.myAccount.title}</h2>
          <div className='sub-title'>{TEXTS.myAccount.subTitleA}{ userData.plan_pro ? ' PRO' : ''} {TEXTS.myAccount.subTitleB} {getDate()}</div>
          {userData.plan_pro && getRemainingTime() > 0 ? <div className='time-remaining-test'>{TEXTS.myAccount.remainingTime(getRemainingTime())}</div> : <></> }
          <Grid container justifyContent='space-between'>
            <Grid className={(userData.plan_pro ? 'not-align-self' : '')  + ' white-box'}>
              <div className='sub-title'>{TEXTS.myAccount.yourData}</div>
              <div className='user-info'>
                <div className='email'>{userData.email}</div>
                <div className='password-display'>{TEXTS.myAccount.password}</div>
                <div className='user-name'>{userData.full_name} - {userData.city} - {userData.state}</div>
              </div>
              <div>
                <div 
                  onClick={() => setVisibilityEmailModal(true)} 
                  className='hover-animation modal-link'
                >
                  <div className='form-link'>
                    {TEXTS.myAccount.changeEmail} <ArrowRight/>
                  </div>
                </div>
                <div  
                  onClick={() => setVisibilityPassModal(true)} 
                  className='hover-animation modal-link'
                >
                  <div className='form-link'>
                    {TEXTS.myAccount.changePassowrd} <ArrowRight/>
                  </div>
                </div>
                <div  
                  onClick={() => setVisibilityInfoModal(true)} 
                  className='hover-animation modal-link'
                >
                  <div className='form-link'>
                    {TEXTS.myAccount.changeData}<ArrowRight/>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid className={(userData.plan_pro ? 'not-align-self' : '')  + ' white-box'}>
              {userData.plan_pro && currPlanInfo.active? 
                <div>
                  <div className='sub-title plan-sub-title'>{TEXTS.myAccount.plan}</div>
                  <div className='plan-type'>{TEXTS.myAccount.proPlan}</div>
                  
                  <div className='card-info'>
                    <div className='card-box'></div>
                    <div className='card-digits'>**** **** **** {userData.credit_card?.last_four_digits}</div>
                  </div>
               

                    <div>
                      <div className='small-text'>{TEXTS.myAccount.nextCharge} {getNextPayment()}.</div>

                      <div 
                        onClick={() => setVisibilityPaymentModal(true)}
                        className='hover-animation manage-payment modal-link'
                      >
                        <div className='form-link'>
                          {TEXTS.myAccount.changePayment} <ArrowRight/>
                        </div>
                      </div>
                      <InputError classes='cancelling-error'>{cancellingError}</InputError>
                      <ButtonOutlined onClick={() => setVisibilityCancelPlan(true)} fullWidth>{TEXTS.myAccount.cancelPlan}</ButtonOutlined>
                    </div>
                </div>
                :
                <div>
                  <div className='sub-title plan-sub-title'>{TEXTS.myAccount.plan}</div>
                  {error ? 
                    <div className='plan-error'>{error}</div>
                    : 
                    <div>
                      <div className='plan-type'>{TEXTS.myAccount.basic}</div>
                      <Link to={urls.purchase.url}><ButtonGreen fullWidth>{TEXTS.myAccount.startTest}</ButtonGreen></Link>
                    </div>
                  }
                  
                </div>
              }
            </Grid>
          </Grid>

          <div className='need-help'>{TEXTS.myAccount.needHelp} <a href={`mailto:${TEXTS.contactEmail}`} className='blue-link hover-animation'>{TEXTS.myAccount.contact}</a></div>
        </div>
      </Grid>
    </Grid>
  );
};

export default UserInfo;
