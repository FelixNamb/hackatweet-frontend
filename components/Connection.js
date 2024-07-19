import styles from "../styles/Connection.module.css";
import { Modal } from "antd";
// import 'antd/dist/antd.css';
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Connection() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSignIn = () => {
    setShowModal(true);
    setIsSignIn(true);
  };

  const handleSignUp = () => {
    setShowModal(true);
    setIsSignUp(true);
  };

  return (
    <main className={styles.main}>
      <div className={styles.divLeft}>
        <Image
          className={styles.logo}
          src="/logo-twitter-blanc-png.png"
          alt="logo"
          width={400}
          height={400}
        />
      </div>
      <div className={styles.divRight}>
        <Image
          className={styles.logo}
          src="/logo-twitter-blanc-png.png"
          alt="logo"
          width={120}
          height={120}
        />
        <h1 className={styles.title}>See what's happening</h1>
        <h3 className={styles.subTitle}>Join hackatweet today.</h3>
        <button type="primary" className={styles.Button} onClick={handleSignUp}>
          Sign-up
        </button>
        <p className={styles.paragraphe}>Already have an account?</p>
        <button
          type="primary"
          className={styles.ButtonSignIn}
          onClick={handleSignIn}
        >
          Sign-in
        </button>
      </div>
      {showModal && isSignIn && (
        <div id="react-modals">
          <Modal
            getContainer="#react-modals"
            className={styles.modal}
            open={showModal}
            closable={false}
            footer={null}
          >
            <SignIn />
          </Modal>
        </div>
      )}
      {showModal && isSignUp && (
        <div id="react-modals">
          <Modal
            getContainer="#react-modals"
            className={styles.modal}
            open={showModal}
            closable={true}
            footer={null}
          >
            <SignUp />
          </Modal>
        </div>
      )}
    </main>
  );
}

export default Connection;
