import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Tweets.module.css";

function Tweet(props) {
  return (
    <div className={styles.topCenterContent}>
      <div classname={styles.tweet}></div>
      <div className={styles.tweetInfos}>
        <div className={styles.tweetLimit}>0/280</div>
        <button className={styles.Button}>Tweet</button>
      </div>
    </div>
  );
}

export default Tweet;
