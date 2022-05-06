import { React, useState } from 'react'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs'


const Slug = (props) => {
	let [data, setData] = useState(props.Data);

  	return (
	 <div className={styles.container}>
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

export async function getStaticPaths(){
	let ret = {
		paths: [],
		fallback: true
	}

	let data = fs.readFileSync("DB/db.json", "utf-8");
	data = JSON.parse(data);
	let numberOfBlogs = Object.keys(data).length;

	for (let i=1; i<=numberOfBlogs; i++){
		ret.paths.push({params: {slug: `${i}`}})
	}
	return ret;
}

export async function getStaticProps(context){
	let id = context.params.slug;
	let data = fs.readFileSync("DB/db.json", "utf-8");
	data = JSON.parse(data);
	data = data[id]
	if (data !== undefined)
		return {
			props: {
				Data: data
			}
		}
	else{
		return {
			props: {
				Data: []
			}
		}
	}
}

export default Slug
