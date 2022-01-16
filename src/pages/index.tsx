import { NextPage, GetServerSideProps } from 'next';
import { useState } from 'react';

import { ScrollToTop } from '../components';
import type { HotpepperResponse, SearchKey } from '../interfaces';
import { Header, Footer, SearchResultContainer } from '../layouts';

const Home: NextPage<{ results: HotpepperResponse['results'] }> = ({ results }) => {
  const [defaultParams, setDefaultParams] = useState<Record<SearchKey, string>>({
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
  });

  return (
    <>
      <div className='dark:bg-dark dark:text-gray-300'>
        <Header />
        <div className='pt-32'>
          <SearchResultContainer
            results={results}
            searchParams={defaultParams}
            setSearchParams={setDefaultParams}
          />
        </div>
        <div className='fixed right-3 sm:right-48 bottom-3'>
          <ScrollToTop />
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const URL = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&genre=G014`;
  try {
    const response = await fetch(URL);
    const hotpepperResponse: HotpepperResponse = await response.json();
    const results = hotpepperResponse.results;

    return {
      props: {
        results,
      },
    };
  } catch (error) {
    throw error;
  }
};

export default Home;
