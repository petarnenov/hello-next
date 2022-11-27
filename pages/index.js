import Link from 'next/link';
import React from 'react';

import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link className={styles.navigation} href={'/blog'}>
        Blog
      </Link>
      <Link className={styles.navigation} href={'/users'}>
        Users
      </Link>
      <Link className={styles.navigation} href={'/posts'}>
        Posts
      </Link>
      <Link className={styles.navigation} href={'/products'}>
        Products
      </Link>
      <Link className={styles.navigation} href={'/news'}>
        News
      </Link>
      <Link className={styles.navigation} href={'/dashboard'}>
        Dashboard
      </Link>
      <Link className={styles.navigation} href={'/dashboard-swr'}>
        Dashboard SWR
      </Link>
      <Link className={styles.navigation} href={'/comments'}>
        Comments
      </Link>
      <Link className={styles.navigation} href={'/auth/signin'}>
        Sign In
      </Link>
      <Link className={styles.navigation} href={'/auth/signout'}>
        Sign Out
      </Link>
    </div>
  );
};

export default Home;
