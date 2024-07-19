import styles from "../styles/Tweets.module.css";
import { useState } from "react";

function Tweet(props) {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div className={styles.topCenterContent}>
      <input
        className={styles.tweet}
        type="search"
        id="tweet"
        name="tweet"
        maxLength="280"
        size="10"
        placeholder="What's up ?"
        onChange={(e) => {
          setMessage(e.target.value);
          setCount(count + 1);
        }}
      />
      <div className={styles.tweetInfos}>
        <div className={styles.tweetLimit}>{count} /280</div>
        <button className={styles.Button}>Tweet</button>
      </div>
    </div>
  );
}

export default Tweet;
