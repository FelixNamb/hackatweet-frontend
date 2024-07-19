import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/user";
import Link from 'next/link';

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.value);

  const profilePicture = {
    borderRadius: '50%', 
  }

  function handleLogout(){
    dispatch(logout());
  }
  return (
    <main className={styles.main}>
      <div className={styles.leftContent}>
        <Image
          className={styles.logo}
          src="/logo-twitter-blanc-png.png"
          alt="logo"
          width={120}
          height={120}
        />
        <div className={styles.bottomLeftContent}>
          <div className={styles.topBottomLeftContent}>
            <Image
              className={styles.userPhoto}
              style={profilePicture}
              src="/user-photo.jpg"
              alt="profile photo"
              width={80}
              height={80}
            />
            <div className={styles.userContent}>
              <p className={styles.firstname}>{user.firstname}</p>
              <p className={styles.username}>@{user.username}</p>
            </div>
          </div>
          <div className={styles.botBottomLeftContent}>
            <Link href={"/connection"}><button className={styles.logout} onClick={() => handleLogout()}>Logout</button></Link>
          </div>
        </div>
      </div>
      <div className={styles.centerContent}>
        <div className={styles.topCenterContent}>
          <Tweet />
        </div>
        <div className={styles.bottomCenterContent}>{/* <LastTweets /> */}</div>
      </div>
      <div className={styles.rightContent}>{/* <Trends /> */}</div>
    </main>
  );
}

export default Home;
