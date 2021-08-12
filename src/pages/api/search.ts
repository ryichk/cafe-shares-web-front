import { NextApiRequest, NextApiResponse } from 'next';

const defaultEndPoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&genre=G014`;

const search = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  let URL = defaultEndPoint;

  URL =
    typeof req.query.large_area === undefined ? URL : `${URL}&large_area=${req.query.largeArea}`;
  URL = typeof req.query.keyword === undefined ? URL : `${URL}&keyword=${req.query.keyword}`;
  URL = typeof req.query.wifi === undefined ? URL : `${URL}&wifi=${req.query.wifi}`;
  URL =
    typeof req.query.privateRoom === undefined
      ? URL
      : `${URL}&private_room=${req.query.privateRoom}`;
  URL = typeof req.query.noSmoking === undefined ? URL : `${URL}&no_smoking=${req.query.noSmoking}`;
  URL = typeof req.query.parking === undefined ? URL : `${URL}&parking=${req.query.parking}`;
  URL = typeof req.query.pet === undefined ? URL : `${URL}&pet=${req.query.pet}`;
  URL = typeof req.query.card === undefined ? URL : `${URL}&card=${req.query.card}`;
  URL = typeof req.query.order === undefined ? URL : `${URL}&order=${req.query.order}`;
  URL = typeof req.query.start === undefined ? URL : `${URL}&start=${req.query.start}`;

  const result = await fetch(encodeURI(URL));
  res.json(result.body);
};

export default search;
