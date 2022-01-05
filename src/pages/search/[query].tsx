import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ScrollToTop } from '../../components';
import type { HotpepperResponse, SearchKey } from '../../interfaces';
import { Header, Footer, SearchResultContainer } from '../../layouts';
import { convertQueryStringToJSON } from '../../lib/convert-querystring-to-json';
import { search } from '../api/search';

const SearchResult: NextPage<{ results: HotpepperResponse['results'] }> = ({ results }) => {
  const router = useRouter();
  const { query } = router.query;
  const { start, largeArea, keyword, wifi, privateRoom, noSmoking, parking, pet, card, order } =
    convertQueryStringToJSON(query as string);
  const [searchParams, setSearchParams] = useState<Record<SearchKey, string>>({
    start,
    largeArea,
    keyword,
    wifi,
    privateRoom,
    noSmoking,
    parking,
    pet,
    card,
    order,
  });

  useEffect(() => {
    const { query } = router.query;
    const { start, largeArea, keyword, wifi, privateRoom, noSmoking, parking, pet, card, order } =
      convertQueryStringToJSON(query as string);
    setSearchParams({
      start,
      largeArea,
      keyword,
      wifi,
      privateRoom,
      noSmoking,
      parking,
      pet,
      card,
      order,
    });
  }, [router]);

  return (
    <>
      <div className=''>
        <Header />
        <div className='pt-32'>
          <SearchResultContainer
            results={results}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { query } = context.query;
    const params = convertQueryStringToJSON(query as string);
    const response = await search(params);
    const hotpepperResponse: HotpepperResponse = await response.json();
    const results = hotpepperResponse.results;

    return {
      props: {
        results,
      },
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default SearchResult;
