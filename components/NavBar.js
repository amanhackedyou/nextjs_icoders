import React from "react";
import styles from '../styles/NavBar.module.css';
import Link from 'next/link'
import { useRouter } from "next/router";

const NavBar = () => {
  let useRtr = new useRouter();
  let pathName = useRtr.pathname
  return (
    <nav className={styles.navBar}>
      <ul>
        <Link href="/">
          <li className={pathName==="/"?styles.pageActive:''}>Home</li>
        </Link>
        <Link href="/blog">
          <li className={pathName==="/blog"?styles.pageActive:''}>Blog</li>
        </Link>
        <Link href="/posts">
          <li className={pathName==="/posts"?styles.pageActive:''}>Posts</li>
        </Link>
        <Link href="/about">
          <li className={pathName==="/about"?styles.pageActive:''}>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
