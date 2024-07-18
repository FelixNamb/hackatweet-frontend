import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import LastTweets from "./LastTweets";
import Trends from "./Trends";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftContent}>
          <div className={styles.logo}></div>
          <div className={styles.bottomLeftContent}>
            <div className={styles.imageUser}></div>
            <div className={styles.user}></div>
          </div>
          <div className={styles.userContent}>
            <div className={styles.firstname}></div>
            <div className={styles.username}></div>
          </div>
        </div>
        <div className={styles.topCenterContent}>{Tweet}</div>
        <div className={styles.centerContent}>{LastTweets}</div>
        <div className={styles.rightContent}>{Trends}</div>
      </main>
    </div>
  );
}

export default Home;
