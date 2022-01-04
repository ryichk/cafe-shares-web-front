import Image from 'next/image';
import { useState, useEffect, VFC } from 'react';

import hotpepperImg from '../../assets/images/hotpepper-s.gif';
import { Button, CardList } from '../../components';
import type { CafeInfo, HotpepperResponse, ResultCounts, SearchKey } from '../../interfaces';
import * as gtag from '../../lib/gtag';

export interface SearchResultContainerProps {
  results: HotpepperResponse['results'];
  searchParams: Record<SearchKey, string>;
  setSearchParams: React.Dispatch<
    Record<SearchKey, string> | ((prev: Record<SearchKey, string>) => Record<SearchKey, string>)
  >;
}

export const SearchResultContainer: VFC<SearchResultContainerProps> = ({
  results,
  searchParams,
  setSearchParams,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [shop, setShops] = useState<Array<CafeInfo>>(results.shop);
  const [page, setPage] = useState<ResultCounts>({
    results_available: Number(results.results_available),
    results_returned: Number(results.results_returned),
    results_start: Number(results.results_start),
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
    if (shop.length === page.results_available) return;

    setSearchParams((prev) => {
      return {
        ...prev,
        start: String(Number(prev.start) + 10),
      };
    });

    gtag.event({
      action: 'click_read_more',
      category: 'Click Read More Button',
      label: 'clicked read more button',
    });
  };

  return (
    <div className='container max-w-full mx-auto py-7'>
      <div className='flex max-w-md m-auto mb-5 text-gray-600'>
        <span className='m-auto'>
          {shop.length.toLocaleString()} / {page.results_available.toLocaleString()} cafes
        </span>
        <div className='m-auto'>
          <Image src={hotpepperImg} alt='hotpepper' />
        </div>
      </div>
      <div className='flex flex-wrap lg:flex-row sm:flex-col sm:justify-center'>
        {page.results_available === 0 ? (
          <p className='m-10'>お探しの条件では検索結果がヒットしませんでした。</p>
        ) : (
          <CardList loading={loading} cafes={shop} />
        )}
      </div>
      {shop.length === page.results_available ? (
        <></>
      ) : (
        <div className='grid justify-center mt-5'>
          <Button size='large' label='Read More' onClick={handleReadMore} />
        </div>
      )}
    </div>
  );
};
