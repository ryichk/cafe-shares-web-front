import { NextPage, GetServerSideProps } from 'next';
import React from 'react';

import type { CafeInfo, HotpepperResponse } from '../../interfaces';
import { Header, Footer } from '../../layouts';

const Cafe: NextPage<{ cafe: CafeInfo }> = ({ cafe }) => {
  const cafeInfo = {
    アクセス: cafe.access,
    住所: cafe.address,
    最寄駅: cafe.station_name,
    営業時間: cafe.open,
    '23時以降': cafe.midnight,
    定休日: cafe.close,
    ランチ: cafe.lunch,
    コース: cafe.course,
    飲み放題: cafe.free_drink,
    食べ放題: cafe.free_food,
    英語メニュー: cafe.english,
    予算: cafe.budget.average,
    予算備考: cafe.budget_memo,
    カード決済: cafe.card,
    総席数: `${cafe.capacity}席`,
    個室: cafe.private_room,
    掘りごたつ: cafe.horigotatsu,
    座敷: cafe.tatami,
    パーティ収容人数: `${cafe.party_capacity}人`,
    'ウェディング・二次会利用': cafe.wedding,
    貸切: cafe.charter,
    Wifi: cafe.wifi,
    駐車場: cafe.parking,
    お子様連れ: cafe.child,
    バリアフリー: cafe.barrier_free,
    ペット: cafe.pet,
    お店の詳細: cafe.shop_detail_memo,
    その他: cafe.other_memo,
  };

  return (
    <>
      <div className='bg-primary'>
        <Header />
        <div className='bg-secondary m-auto max-w-5xl mt-5 p-5 sm:p-14 rounded-t-xl'>
          <h1 className='text-3xl sm:text-4xl font-bold'>{cafe.name}</h1>
          <div className='my-5'>
            <p className='text-lg sm:text-xl'>{cafe.catch}</p>
          </div>
          <div className=''>
            <div
              className='h-56 sm:h-96 rounded'
              style={{
                background: `no-repeat center / cover url(${cafe.photo.pc.l})`,
              }}
            />
            <div className='mt-5'>
              {Object.entries(cafeInfo).map(([key, value]) => (
                <div className='flex border-t py-3' key={key}>
                  <div className='w-1/3 sm:w-1/4 font-semibold'>{key}</div>
                  <div className='w-2/3 sm:w-3/4'>{value}</div>
                </div>
              ))}
              <div className='border-t border-b py-3'>
                <div className='font-semibold'>店舗URL</div>
                <div className='mt-1'>
                  <a
                    href={cafe.urls.pc}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='link link-primary'
                  >
                    {cafe.urls.pc}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const URL = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&id=${id}`;
  try {
    const res = await fetch(URL);
    const data: HotpepperResponse = await res.json();
    const cafe: CafeInfo = data.results.shop[0];

    return {
      props: {
        cafe,
      },
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default Cafe;
