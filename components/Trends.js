import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Trends = (props) => {
  const [hashtags, setHashtags] = useState([]);

  useEffect(() => {
    fetch("http:localhost:3000/allTrends")
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setHashtags(data.hashtags);
        }
      });
  }, [props.isUpdate]);

  return (
    <div>
      <div className={styles.hastagHomeContainer}>
        {hashtags.map((hashtag) => (
          <div key={hashtag._id} className={styles.hashtagHome}>
            <Link href={`/hashtag/${hashtag._id.slice(1)}`}>
              <a className={styles.hastagTagLink}>{hashtag._id}</a>
            </Link>
            <p>{hashtag.count} Tweet</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trends;
