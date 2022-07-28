import { Plan } from '@app/models/purchase.model';
import InputError from '@app/ui/components/forms/inputError/inputError';
import SubmitForm from '@app/ui/components/forms/submitForm/SubmitForm';
import { TEXTS } from '@app/ui/utils/portal-texts';
import { Grid } from '@mui/material';

import './PurchaseDetails.scss';

interface PropsPurchaseDetails {
  isLoading: boolean;
  isModal?: boolean;
  plan: Plan;
}
// TO DO VALOR DO PLANO
const PurchaseDetails = ({isLoading, plan, isModal}: PropsPurchaseDetails) => {
  return (
    <Grid className='purchase-details'>
      <div className='details-box'>
        <div className='details-title'>
          {TEXTS.purchasePage.detailsTitle}
        </div>
        <div className='plan-details'>
          {plan && plan.id ? 
            <>
              <div className='plan-name'>
                {plan.title}
              </div>
              <div  className='plan-value'>
              R$ {plan.value?.toFixed(2)}{TEXTS.purchasePage.perMonth}
              </div>
              <div className='plan-alert'>
                {TEXTS.purchasePage.detailAlert}
              </div>
            </>: <>
              <InputError>{plan.title}</InputError>
            </>}
        </div>
        <SubmitForm disabled={isLoading || (!plan || !plan.id)} classess='submit-purchase' label={isModal ? TEXTS.myAccount.savePayment : TEXTS.purchasePage.submitLabel}/>

        <div className='purchase-terms'>
          {TEXTS.purchasePage.purchaseTerms}
        </div>
      </div>
    </Grid>
  );
};

export default PurchaseDetails;