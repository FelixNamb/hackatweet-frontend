import { useState } from "react";
import styles from "../styles/LastTweets.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addTweets, removeTweets } from "../reducers/tweets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function LastTweets(props) {
  const dispatch = useDispatch();
  const [isTheUser, setIsTheUser] = useState(false);
  const user = useSelector((state) => state.users.value);

  

  if(props.username === user.username){
    setIsTheUser(true);
  }
  const profilePicture = {
    borderRadius: '50%', 
  }

  // const handleLikeTweet = () => {
  //   if (!user.token) {
  //     return;
  //   }
  //   let heartIconStyle = { cursor: "pointer" };
  //   if (props.isLiked) {
  //     (heartIconStyle = { color: "#fa1674", cursor: "pointer" }), nbLike + 1;
  //   } else {
  //     heartIconStyle = { color: "white", cursor: "pointer" };
  //   }
  // };

  // const handleModifyTweet = () => {
  //   if (!user.token) {
  //     return;
  //   }
  //   fetch(`http:localhost:3000/users/canUseTweet/${user.token}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.result && data.canUseTweet) {
  //         if (props.isTweeted) {
  //           dispatch(removeTweets(props));
  //         } else {
  //           dispatch(addTweets(props));
  //         }
  //       }
  //     });
  // };
  return (
    <div style={styles.principalDiv}>
      <div style={styles.user}>
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
      <p>{props.message}</p>
      <div>
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
