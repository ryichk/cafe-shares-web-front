import { NextApiRequest, NextApiResponse } from 'next';

const defaultEndPoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&genre=G014`;

const search = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  let URL = defaultEndPoint;

  if (typeof req.query.large_area !== undefined) {
    URL = `${URL}&large_area=${req.query.largeArea}`;
  }
  if (typeof req.query.keyword !== undefined) {
    URL = `${URL}&keyword=${req.query.keyword}`;
  }
  if (typeof req.query.wifi !== undefined) {
    URL = `${URL}&wifi=${req.query.wifi}`;
  }
  if (typeof req.query.privateRoom !== undefined) {
    URL = `${URL}&private_room=${req.query.privateRoom}`;
  }
  if (typeof req.query.noSmoking !== undefined) {
    URL = `${URL}&no_smoking=${req.query.noSmoking}`;
  }
  if (typeof req.query.parking !== undefined) {
    URL = `${URL}&parking=${req.query.parking}`;
  }
  if (typeof req.query.pet !== undefined) {
    URL = `${URL}&pet=${req.query.pet}`;
  }
  if (typeof req.query.card !== undefined) {
    URL = `${URL}&card=${req.query.card}`;
  }
  if (typeof req.query.order !== undefined) {
    URL = `${URL}&order=${req.query.order}`;
  }
  if (typeof req.query.start !== undefined) {
    URL = `${URL}&start=${req.query.start}`;
  }

  const result = await fetch(encodeURI(URL));
  res.json(result.body);
};

export default search;
