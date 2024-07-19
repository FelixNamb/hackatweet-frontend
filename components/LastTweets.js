import { useState } from "react";
import styles from "../styles/LastTweets.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addTweets, removeTweets } from "../reducers/tweets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function LastTweets(props) {
  const [likeTweet, setLikeTweet] = useState(0); //boolean
  const nbLike = useSelector((state) => state.nbLike.value);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const handleLikeTweet = () => {
    if (!user.token) {
      return;
    }
    let heartIconStyle = { cursor: "pointer" };
    if (props.isLiked) {
      (heartIconStyle = { color: "#fa1674", cursor: "pointer" }), nbLike + 1;
    } else {
      heartIconStyle = { color: "white", cursor: "pointer" };
    }
  };

  const handleModifyTweet = () => {
    if (!user.token) {
      return;
    }
    fetch(`http:localhost:3000/users/canUseTweet/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result && data.canUseTweet) {
          if (props.isTweeted) {
            dispatch(removeTweets(props));
          } else {
            dispatch(addTweets(props));
          }
        }
      });
  };
  return (
    <div className={styles.centerContent}>
      <div className={styles.userTweet} onClick={handleModifyTweet()}>
        <div className={styles.imageUsernameCenter}></div>
        <div className={styles.firstnameCenter}></div>
        <div className={styles.userUsernameCenter}></div>
      </div>
      <div className={styles.tweetContent}>
        <div className={styles.tweet2}></div>
        <div className={styles.heartIcon}>
          <div className={styles.heart}>
            <span>
              {likeTweet}
              {nbLike}
            </span>
            <span>
              <FontAwesomeIcon
                icon={faHeart}
                onClick={() => handleLikeTweet()}
                style={heartIconStyle}
                className="like"
              />
            </span>
          </div>
          <div className={styles.heartCount}></div>
        </div>
      </div>
    </div>
  );
}

export default LastTweets;
