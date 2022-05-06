import { React, useState, useEffect } from 'react'
import styles from '../../styles/BlogPost.module.css'
import { useRouter } from 'next/router'


const Slug = () => {
	let useRtr = new useRouter();
	let { slug } = useRtr.query;
	let [data, setData] = useState([]);

	useEffect(() => {
		(async () => {
			if (slug === undefined)
			{
				console.log("Slug not defined");
				return 0;
			}

			let req = await fetch(`http://127.0.0.1:3000/api/getdatabyid?id=${slug}`);
			let data = await req.json();
			setData(data)
		})()
	}, [])


  	return (
	 <div className={styles.container}>
		{/* <h1 className={styles.heading}>How to learn Java?</h1>
		<p className={styles.content}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum quibusdam, ullam impedit ea aut quis reiciendis culpa magnam deleniti temporibus molestias harum fugiat aliquid perspiciatis voluptatum est autem totam excepturi consequatur earum sapiente eum, veritatis doloribus.
		</p> */}

		{
			data.length !== 0?(
				<>
				<h1 className={styles.heading}>{data.Title}</h1>
				<p className={styles.content}>
				{data.Content}
				</p>
				</>
			):''
		}

	 </div>
  )
}

export default Slug
