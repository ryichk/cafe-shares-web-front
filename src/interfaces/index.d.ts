import React from 'react';

export interface Photo {
  pc: {
    l: string;
    m: string;
    s: string;
  };
  mobile: {
    l: string;
    s: string;
  };
}

export interface CafeInfo {
  id: number;
  name: string;
  name_kana: string;
  address: string;
  station_name: string;
  large_service_area: {
    name: string;
  };
  service_area: {
    name: string;
  };
  large_area: {
    name: string;
  };
  middle_area: {
    name: string;
  };
  small_area: {
    name: string;
  };
  lat: float;
  lng: float;
  genre: {
    name: string;
    catch: string;
  };
  sub_genre: {
    name: string;
  };
  budget: {
    name: string;
    average: string;
  };
  budget_memo: string;
  catch: string;
  capacity: number;
  party_capacity: number;
  wedding: string;
  charter: string;
  access: string;
  mobile_access: string;
  urls: {
    pc: string;
  };
  photo: Photo;
  open: string;
  midnight: string;
  close: string;
  wifi: string;
  private_room: string;
  horigotatsu: string;
  tatami: string;
  card: string;
  non_smoking: string;
  parking: string;
  english: string;
  pet: string;
  child: string;
  lunch: string;
  course: string;
  free_drink: string;
  free_food: string;
  barrier_free: string;
  shop_detail_memo: string;
  other_memo: string;
}

export interface HotpepperResponse {
  results: {
    results_available: number;
    results_returned: number;
    results_start: number;
    shop: Array<CafeInfo>;
  };
}

export interface ResultCounts {
  results_available: number;
  results_returned: number;
  results_start: number;
}

export type SearchKey =
  | 'start'
  | 'largeArea'
  | 'keyword'
  | 'wifi'
  | 'privateRoom'
  | 'noSmoking'
  | 'parking'
  | 'pet'
  | 'card'
  | 'order';

export interface SelectData {
  name: string;
  code: string;
}

export interface FormItem {
  label: string;
  name: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction>;
}

export interface SelectProps extends FormItem {
  data: Array<SelectData>;
}

export interface InputProps extends FormItem {
  placeholder: string;
}

export interface ICognitoUser {
  username: string;
  attributes: {
    email: string;
  };
}
