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
            <Image className={styles.userPhoto} src="/user-photo.jpg" alt="profile photo" width={100} height={100}/>
            <div className={styles.user}></div>
            <div className={styles.userContent}>
              <div className={styles.firstname}></div>
              <div className={styles.username}></div>
            </div>
          </div>
        </div>
        <div className={styles.centerContent}>
          <div className={styles.topCenterContent}>
            <Tweet />
          </div>
          <div className={styles.bottomCenterContent}>
            {/* <LastTweets /> */}
          </div>
        </div>
        <div className={styles.rightContent}>
          {/* <Trends /> */}
        </div>
      </main>
  );
}

export default Home;
