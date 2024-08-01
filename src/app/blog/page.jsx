'use client'
import React, { useEffect, useState } from 'react';
import styles from './blog.module.css';
import PostCard from '@/components/postCard/PostCard';
import { getPosts } from '@/lib/data';

// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
//   if (!res.ok) {
//     throw new Error('Something went wrong');
//   }
//   return res.json();
// };

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // FETCH DATA WITH AN API
        // const data = await getData();

        // FETCH DATA WITHOUT AN API
        const data = await getPosts()
        setPosts(data);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    
  }, []);

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;








