import { useEffect, useState } from "react";
import styles from "../styles/Lasttweets.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addTweets, removeTweets } from "../reducers/tweets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function LastTweets(props) {
  const dispatch = useDispatch();
  const [isTheUser, setIsTheUser] = useState(false);
  const user = useSelector((state) => state.users.value);

  let heartIconStyle = { cursor: "pointer" };

  const handleLikeTweet = () => {
    if (!user.token) {
      return;
    }
    if (props.isLiked) {
      (heartIconStyle = { color: "#fa1674", cursor: "pointer" }), nbLike + 1;
    } else {
      heartIconStyle = { color: "white", cursor: "pointer" };
    }
  };

  const handleDeleteTweet = () => {
    if (!user.token) {
      return;
    }
    fetch(`http:localhost:3000/tweets`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: user, message: props.message, date: props.date }),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(removeTweets(props.message));   
        }
      });
  };


  useEffect(()=>{
    if(props.username === user.username){
      setIsTheUser(true);
    }
  }, [])
  
  const profilePicture = {
    borderRadius: '50%', 
  }

  return (
    <div className={styles.principalDiv}>
      <div className={styles.user}>
        <Image
          className={styles.userPhoto}
          style={profilePicture}
          src="/user-photo.jpg"
          alt="profile photo"
          width={50}
          height={50}
        />
        <p className={styles.firstname}>{props.firstname}</p>
        <p className={styles.username}>@{props.username}</p>
      </div>
      <p className={styles.paragraph}>{props.message}</p>
      <div className={styles.lastDiv}>
        <FontAwesomeIcon 
        icon={faHeart}
        // style={heartIconStyle}
        cursor={'pointer'}
        onClick={() => handleLikeTweet()}
        />
        {/* {nbLike} */}
        {isTheUser && <FontAwesomeIcon icon={faTrash} cursor={'pointer'} onClick={() => handleDeleteTweet()}/>}
      </div>
    </div>
  );
}

export default LastTweets;
