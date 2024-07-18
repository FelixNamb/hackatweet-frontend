import styles from '../styles/Home.module.css';
import Link from 'next/link';

function Home() {
  
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          <Link href="/connection">Go to Connection</Link>
        </h1>
      </main>
    </div>
  );
}

export default Home;
