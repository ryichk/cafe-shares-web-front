import React, { useEffect, MutableRefObject } from 'react';
import { Post } from '../API';

export const useFetchPosts = (
  cafeId: string,
  nextToken: null | string,
  setNextToken: React.Dispatch<React.SetStateAction<null | string>>,
  setPosts: React.Dispatch<React.SetStateAction<Array<Post>>>,
  pageNumber: number,
) => {
  useEffect(() => {
    if (nextToken && pageNumber) {
      fetch(`/api/posts?nextToken=${nextToken}&cafeId=${cafeId}`)
        .then((response) => response.json())
        .then(({ posts, nextToken }) => {
          setNextToken(nextToken);
          setPosts((prev) => [...prev, ...posts]);
        });
    }
  }, [pageNumber]);
};

export const useInfiniteScroll = (
  lastPostCardRef: MutableRefObject<HTMLElement>,
  setPageNumber: React.Dispatch<React.SetStateAction<number>>,
) => {
  useEffect(() => {
    const option = {
      rootMargin: '0px',
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNumber((prev) => prev + 1);
      }
    }, option);
    if (lastPostCardRef.current) {
      observer.observe(lastPostCardRef.current);
    }
  }, []);
};
