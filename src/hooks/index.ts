import { useEffect } from 'react';

import { Post } from '../API';

export const usePointToPositionOfSlide = (posts: Array<Post>) => {
  const pointToPositionOfSlide = (post: Post, pictureIndex: number) => {
    for (let i = 0; i < post.pictures.length; i++) {
      document.getElementById(`${post.id}-badge${i}`)?.classList.remove('text-primary');
    }
    document.getElementById(`${post.id}-badge${pictureIndex}`)?.classList.add('text-primary');
  };

  useEffect(() => {
    for (const post of posts) {
      for (let i = 0; i < post.pictures.length; i++) {
        const options = {
          rootMargin: '0px',
          threshold: 0.8,
        };
        const observer = new IntersectionObserver(() => {
          pointToPositionOfSlide(post, i);
        }, options);
        const target = document.getElementById(`${post.id}-slide${i}`);
        observer.observe(target);
      }
    }
  }, [posts]);
};
