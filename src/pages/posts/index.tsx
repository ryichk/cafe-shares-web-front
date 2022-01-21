import { NextPage } from 'next';
import { useRef, useState } from 'react';

import { Post } from '../../API';
import { PostCard, ScrollToTop } from '../../components';
import { useFetchPosts, useInfiniteScroll } from '../../hooks';
import { Header, Footer } from '../../layouts';

const Posts: NextPage = () => {
  const [posts, setPosts] = useState([]);
  const [nextToken, setNextToken] = useState('0');
  const [pageNumber, setPageNumber] = useState(0);
  const lastPostCardRef = useRef();
  useFetchPosts(null, nextToken, setNextToken, setPosts, pageNumber);
  useInfiniteScroll(lastPostCardRef, setPageNumber);

  return (
    <>
      <Header />
      <div className='pt-36 min-h-screen dark:bg-dark'>
        <div className='container mx-auto'>
          <h1 className='font-bold mt-3 ml-5 sm:hidden dark:text-gray-400'>投稿一覧</h1>
          <div className='flex flex-wrap justify-center'>
            {posts.length ? (
              posts?.map((post: Post) => <PostCard key={post.id} post={post} />)
            ) : (
              <>
                <span>Loading...</span>
              </>
            )}
            <div ref={lastPostCardRef} />
          </div>
          <div className='fixed right-3 sm:right-48 bottom-3'>
            <ScrollToTop />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Posts;
