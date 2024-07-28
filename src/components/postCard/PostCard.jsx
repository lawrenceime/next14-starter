import React from 'react'
import styles from './postcard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src='https://images.pexels.com/photos/27019187/pexels-photo-27019187/free-photo-of-a-man-carrying-his-surfboard-into-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href='/blog/post'>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard