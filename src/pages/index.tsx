import { NextPage, GetServerSideProps } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { SearchModal, CardList, Button } from '../components';
import hotpepperImg from '../components/assets/images/hotpepper-s.gif';
import type { HotpepperResponse, ResultCounts, CafeInfo, SearchParams } from '../interfaces';

const Home: NextPage<{ data: HotpepperResponse }> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [shop, setShops] = useState<Array<CafeInfo>>(data.results.shop);
  const [page, setPage] = useState<ResultCounts>({
    results_available: Number(data.results.results_available),
    results_returned: Number(data.results.results_returned),
    results_start: Number(data.results.results_start),
  });
  const [searchParams, setSearchParams] = useState<SearchParams>({
    start: page.results_start,
    largeArea: 'Z011',
    keyword: '',
    wifi: '0',
    privateRoom: '0',
    noSmoking: '0',
    parking: '0',
    pet: '0',
    card: '0',
    order: '4',
  });

  useEffect(() => {
    const request = async () => {
      setLoading(true);
      const query = new URLSearchParams(searchParams);
      const response = await fetch(`/api/search?${query}`);
      const hotpepperResponse: HotpepperResponse = await response.json();
      const results = hotpepperResponse.results;

      setPage({
        results_available: Number(results.results_available),
        results_returned: Number(results.results_returned),
        results_start: Number(results.results_start),
      });

      if (Number(results.results_start) === 1 || Number(results.results_returned) === 0) {
        setShops(results.shop);
        setLoading(false);
        return;
      }

      setShops((prev: Array<CafeInfo>) => {
        setLoading(false);
        return [...prev, ...results.shop];
      });
    };

    request();
  }, [searchParams]);

  const handleReadMore = (): void => {
    if (shop.length <= page.results_start) return;

    setSearchParams((prev) => {
      return {
        ...prev,
        start: prev.start + 10,
      };
    });
  };

  return (
    <div className='bg-primary'>
      <div className='container mx-auto'>
        <div className='max-w-md mx-auto pt-8 pl-4 pb-7'>
          <h1 className='text-3xl text-white'>Cafe Search</h1>
        </div>
        <div className='mx-3'>
          <SearchModal setSearchParams={setSearchParams} />
        </div>
        <div className='container max-w-full bg-secondary my-7 mx-auto py-7 rounded-t-xl'>
          <div className='flex max-w-md m-auto mb-5 text-gray-600'>
            <span className='m-auto'>
              {shop.length.toLocaleString()} / {page.results_available.toLocaleString()} cafes
            </span>
            <div className='m-auto'>
              <Image src={hotpepperImg} alt='hotpepper' />
            </div>
          </div>
          <div className='flex flex-wrap lg:flex-row sm:flex-col sm:justify-center'>
            {page.results_returned === 0 ? (
              <p className='m-10'>お探しの条件では検索結果がヒットしませんでした。</p>
            ) : (
              <CardList loading={loading} cafes={shop} />
            )}
          </div>
          {shop.length <= page.results_start || page.results_returned === 0 ? (
            <></>
          ) : (
            <div className='grid justify-center mt-5'>
              <Button size='large' label='Read More' onClick={handleReadMore} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const URL = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&genre=G014`;
  try {
    const res = await fetch(URL);
    const data: HotpepperResponse = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    throw error;
  }
};

export default Home;
