import Link from 'next/link';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

import styles from '../styles/Home.module.css';

const Home = () => {
  const { data: session, status } = useSession();
  console.log('session: ', session);
  console.log('status: ', status);
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
      <Link className={styles.navigation} href={'/comments'}>
        Comments
      </Link>
      {status === 'authenticated' ? (
        <>
          <Link className={styles.navigation} href={'/dashboard'}>
            Dashboard
          </Link>
          <Link className={styles.navigation} href={'/dashboard-swr'}>
            Dashboard SWR
          </Link>
          <Link
            className={styles.navigation}
            href={'/api/auth/signout'}
            onClick={() => signOut()}
          >
            Sign Out
          </Link>
        </>
      ) : status === 'unauthenticated' ? (
        <Link
          className={styles.navigation}
          href={'/api/auth/signin'}
          onClick={() => signIn()}
        >
          Sign In with GitHub
        </Link>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;
