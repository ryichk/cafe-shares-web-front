import { format } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { Carousel } from './Carousel';
import { PostCardProps } from './PostCard';

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const router = useRouter();

  return (
    <div className='card bg-white my-5 mx-5 max-w-sm w-screen shadow-xl dark:bg-gray-700 dark:text-gray-300'>
      <Carousel post={post} />
      <div className='mx-4 mb-4'>
        <div className='flex items-center'>
          {/* <div className='avatar'>
                        <div className='rounded-full w-7 h-7'>
                          <Image src={} height={50} width={50} />
                        </div>
                      </div> */}
          <span className='ml-2 text-sm font-bold'>{post.owner}</span>
        </div>
        {router.pathname === '/posts' ? (
          <Link href={`/cafe/${post.cafeId}`} passHref>
            <a className='text-sm underline'>{`@${post.cafeName}`}</a>
          </Link>
        ) : (
          <></>
        )}
        <p className='my-3 text-sm'>
          {post.content.length < 30 ? (
            post.content
          ) : (
            <>
              {post.content.slice(0, 20)}
              <span
                id={`read-more-${post.id}`}
                className='text-sm text-primary'
                onClick={() => {
                  document.getElementById(`read-more-${post.id}`).classList.add('hidden');
                  document.getElementById(`content-${post.id}`).classList.remove('hidden');
                }}
              >
                ...続きを読む
              </span>
              <span id={`content-${post.id}`} className='hidden'>
                {post.content.slice(20)}
              </span>
            </>
          )}
        </p>
        <p className='mt-2 text-xs'>
          投稿日時: {format(new Date(post.createdAt), 'yyyy年MM月dd日HH時mm分')}
        </p>
      </div>
    </div>
  );
};
