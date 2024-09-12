import React from 'react';
import styles from './blog.module.css';
import PostCard from '@/components/postCard/PostCard';
import { getPosts } from '@/lib/data';
import { getApiUrl } from '@/lib/getApiUrl';

const getData = async () => {
    const url = getApiUrl(`/api/blog`);
    const res = await fetch(url, { next: { revalidate: 3600 } });
  
    // console.log(res);
    try {
        if (!res.ok) {
            throw new Error('Something went wrong');
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const BlogPage = async () => {
    const posts = await getData();
    // console.log(posts);

    return (
        <div className={styles.container}>
            {Array.isArray(posts) && posts.map((post) => (
                <div className={styles.post} key={post._id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
};

export default BlogPage;
