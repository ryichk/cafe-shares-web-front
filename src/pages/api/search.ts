import { NextApiRequest, NextApiResponse } from 'next';
import { SearchKey } from '../../interfaces';

export const search = async (params: Record<SearchKey, string>): Promise<Response> => {
  const defaultEndPoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&genre=G014`;
  let URL = defaultEndPoint;

  URL = typeof params.largeArea === undefined ? URL : `${URL}&large_area=${params.largeArea}`;
  URL =
    typeof params.keyword === undefined
      ? URL
      : `${URL}&keyword=${String(params.keyword).replace(/[\u3000]/g, '+')}`;
  URL = typeof params.wifi === undefined ? URL : `${URL}&wifi=${params.wifi}`;
  URL = typeof params.privateRoom === undefined ? URL : `${URL}&private_room=${params.privateRoom}`;
  URL = typeof params.noSmoking === undefined ? URL : `${URL}&no_smoking=${params.noSmoking}`;
  URL = typeof params.parking === undefined ? URL : `${URL}&parking=${params.parking}`;
  URL = typeof params.pet === undefined ? URL : `${URL}&pet=${params.pet}`;
  URL = typeof params.card === undefined ? URL : `${URL}&card=${params.card}`;
  URL = typeof params.order === undefined ? URL : `${URL}&order=${params.order}`;
  URL = typeof params.start === undefined ? URL : `${URL}&start=${params.start}`;

  const result = await fetch(encodeURI(URL));
  return result;
};

const responseSearchData = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const params = req.query as Record<SearchKey, string>;
  const result = await search(params);
  res.json(result.body);
};

export default responseSearchData;
