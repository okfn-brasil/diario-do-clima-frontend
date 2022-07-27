import { removeSpecialChars } from '@app/ui/utils/functions.utils';
import { urls } from '@app/ui/utils/urls';
import { AxiosResponse } from 'axios';

export interface GazetteResponse extends AxiosResponse {
  excerpts: GazetteModel[];
  total_excerpts: number;
}

export interface GazetteModel {
  date: string;
  edition: string;
  entities: string[];
  excerpt: string;
  is_extra_edition: boolean;
  state_code: string;
  subthemes: string[];
  territory_id: string;
  territory_name: string;
  txt_url: string;
  url: string;
}

export const parseGazettes = (gazettes: GazetteModel[], query: string) => {
  return gazettes.map(item => {
    item.excerpt = item.excerpt.replace(/entidadecnpj/g, '~~~').replace(/entidadeambiental/g, '~%');
    if(query) {
      item.excerpt = replaceQueryToBold(item.excerpt, query.trim());
    }
    const replaceCnpj = item.excerpt.split('<~~~>');
    let newText = '';
    replaceCnpj.forEach(textFragment => { 
      const cnpjIndex = textFragment.indexOf('</~~~>');
      if (cnpjIndex > 0) {
        const cnpj = textFragment.slice(0, cnpjIndex).trim();
        newText += `<a href='${urls.cnpjs.urlWithoutParam}${removeSpecialChars(cnpj)}'>${textFragment}`;
      } else {
        newText += textFragment;
      }
    });
    const date = new Date(item.date);
    let replacedText = newText.replace(/~~~/g, 'a').replace(/~%/g, 'b');
  
    return {
      ...item,
      date: `${formatMonth(date.getDate())}/${formatMonth(date.getMonth() + 1)}/${date.getFullYear()}`,
      excerpt: replacedText
    }
  });
}

export const formatMonth = (number: number) => {
  return number < 10 ? `0${number}` : number;
}

const replaceQueryToBold = (text: string, query: string) => {
  return text.replace(new RegExp(query, 'g'), `<b>${query}</b>`)
    .replace(new RegExp(query.toLowerCase(), 'g'), `<b>${query.toLowerCase()}</b>`)
    .replace(new RegExp(query.toUpperCase(), 'g'), `<b>${query.toUpperCase()}</b>`)
}