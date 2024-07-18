import styles from "../styles/Connection.module.css";
import { Button, Popover } from "antd";
import "antd/dist/antd.css";
import Image from "next/image";
import { useState } from "react";

function Connection() {
  const [username, setUsername] = useState("");
  let content;

  function handleSignIn() {
    content = (
      <div className={styles.content}>
        <Image
          src="https://get-picto.com/wp-content/uploads/2023/10/Logo-twitter-blanc-png.webp"
          alt="logo"
          width={120}
          height={120}
        />
        <h2>Connect to Hackatweet</h2>
        <input onChange={(e) => setUsername(e.target.value)} value={username} />
      </div>
    );
  }

  function handleSignUp() {}

  return (
    <main className={styles.main}>
      <div className={styles.divLeft}>
        <Image
          src="https://get-picto.com/wp-content/uploads/2023/10/Logo-twitter-blanc-png.webp"
          alt="logo"
          width={400}
          height={250}
        />
      </div>
      <div className={styles.divRight}>
        <Image
          src="https://get-picto.com/wp-content/uploads/2023/10/Logo-twitter-blanc-png.webp"
          alt="logo"
          width={120}
          height={120}
        />
        <h1 className={styles.title}>See what's happening</h1>
        <h3 className={styles.subTitle}>Join hackatweet today.</h3>
        <Popover content={content} title="Title" trigger="click" placement="">
          <Button
            type="primary"
            className={styles.Button}
            onClick={() => handleSignUp()}
          >
            Sign-up
          </Button>
        </Popover>
        <p className={styles.paragraphe}>Already have an account ?</p>
        <Popover content={content} title="Title" trigger="click" placement="">
          <Button
            type="primary"
            className={styles.Button}
            onClick={() => handleSignIn()}
          >
            Sign-in
          </Button>
        </Popover>
      </div>
    </main>
  );
}

export default Connection;
