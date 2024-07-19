import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Tweets.module.css";

function Tweet(props) {
  return (
    <div className={styles.topCenterContent}>
      <div className={styles.title}>
        Home
        <div className={styles.textContent}></div>
      </div>
      <div className={styles.tweetInfos}>
        <div className={styles.tweetLimit}></div>
        <div className={styles.buttonTweet}></div>
      </div>
    </div>
  );
}

export default Tweet;
