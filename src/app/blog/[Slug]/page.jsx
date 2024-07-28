  import React from 'react'
  import styles from './singlePost.module.css'
  import Image from 'next/image'

  const SinglePostPage = ({params , searchParams}) => {

    console.log(params);

    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src='https://images.pexels.com/photos/27019187/pexels-photo-27019187/free-photo-of-a-man-carrying-his-surfboard-into-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' fill className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.detail}>
            <Image className={styles.avatar} src='https://images.pexels.com/photos/27019187/pexels-photo-27019187/free-photo-of-a-man-carrying-his-surfboard-into-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load ' alt='' width={50} height={50}/>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>Terry Jefferson</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
            </div>
          </div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia cumque nam. Debitis iste quisquam illum cum laudantium ut aut!
          </div>
        </div>
      </div>
    )
  }

  export default SinglePostPage