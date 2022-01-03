import { SearchKey } from '../interfaces';

export const convertQueryStringToJSON = (query: string): Record<SearchKey, string> => {
  if (
    query.includes('start') ||
    query.includes('largeArea') ||
    query.includes('keyword') ||
    query.includes('wifi') ||
    query.includes('privateRoom') ||
    query.includes('noSmoking') ||
    query.includes('parking') ||
    query.includes('pet') ||
    query.includes('card') ||
    query.includes('order')
  ) {
    return JSON.parse(
      `{"${decodeURI(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`,
    );
  } else {
    return {
      start: '1',
      largeArea: 'Z011',
      keyword: '',
      wifi: '0',
      privateRoom: '0',
      noSmoking: '0',
      parking: '0',
      pet: '0',
      card: '0',
      order: '4',
    };
  }
};
