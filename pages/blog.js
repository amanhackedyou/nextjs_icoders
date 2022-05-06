import { React, useEffect, useState } from "react";
import Head from 'next/head'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';


const blog = () => {
  let [blogs, setBlogs] = useState([])

  useEffect(() => {
    ( async () => {
        let allPosts = []
        let reqst = await fetch("http://127.0.0.1:3000/api/getalldata");
        let data = await reqst.json();
        let totelBlogNum = Object.keys(data).length
        for (let i=1; i<=totelBlogNum; i++){
          allPosts.push(data[`${i}`]);
        }
        setBlogs(allPosts);
    })()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Blogs - iCoders</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
			<h1 style={{textAlign: 'center'}}>Latest Blog</h1>



        <div className={styles.grid}>
		  		{/* <Link href={`blogpost/how-to-learn-java`} >
			  <div className={styles.card}>
            <h2>How to learn Java?</h2>
            <p>Find in-depth information about Next...</p>
			  </div>
          </Link> */}




        {
          // blogs.map(e => {
          //   <h1>Hii</h1>
          // })

          blogs.length !== 0?blogs.map((blog, i) => {
            return (
              <Link key={i} href={`blogpost/${i+1}`} >
                <div className={styles.card}>
                  <h2>{blog.Title}</h2>
                  <p>blog.Content</p>
                </div>
              </Link>
            )
          }):''
        }



        </div>
      </main>
    </div>
  );
};

export default blog;