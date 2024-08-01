  import React, { Suspense } from 'react'
  import styles from './singlePost.module.css'
  import Image from 'next/image'
import PostUser from '@/components/postUser/postUser';
import { getPost } from '@/lib/data';
 

// FETCH DATA WITH AN API
  // const getData = async (slug) => {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {cache:'no-store'});
  //   console.log(res);
  //   if (!res.ok) {
  //     throw new Error('Something went wrong');
  //   } 

  //   return res.json();
  // };
  

  const SinglePostPage = async({params}) => {
    
    console.log('Params:', params);

    const {slug} = params 
    // FETCH DATA WITH AN API
    // const post = await getData(slug);

      // FETCH DATA WITHOUT AN API
      const post = await getPost(slug)
      console.log(post);



    return (
      <div className={styles.container}>
        {post.img && <div className={styles.imgContainer}>
          <Image src='https://images.pexels.com/photos/27019187/pexels-photo-27019187/free-photo-of-a-man-carrying-his-surfboard-into-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' fill className={styles.img} />
        </div>}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.detail}>
            <Image className={styles.avatar} src='https://images.pexels.com/photos/27019187/pexels-photo-27019187/free-photo-of-a-man-carrying-his-surfboard-into-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load ' alt='' width={50} height={50}/>
            {post && <Suspense fallback={<div>Loading</div>}>
            <PostUser userId={post.userId}/>
            </Suspense>}
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
            </div>
          </div>
          <div className={styles.content}>
           {post.desc}
          </div>
        </div>
      </div>
    )
  }

  export default SinglePostPage