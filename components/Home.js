import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import Image from 'next/image';

function Home() {
  return (
      <main className={styles.main}>
        <div className={styles.leftContent}>
        <Image className={styles.logo} src="/logo-twitter-blanc-png.png" alt="logo" width={120} height={120}/>
          <div className={styles.bottomLeftContent}>
            <div className={styles.imageUser}></div>
            <div className={styles.user}></div>
          </div>
          <div className={styles.userContent}>
            <div className={styles.firstname}></div>
            <div className={styles.username}></div>
          </div>
        </div>
        <div className={styles.topCenterContent}>
          {/* <Tweet /> */}
        </div>
        <div className={styles.centerContent}>
          {/* <LastTweets /> */}
        </div>
        <div className={styles.rightContent}>
          {/* <Trends /> */}
        </div>
      </main>
  );
}

export default Home;
