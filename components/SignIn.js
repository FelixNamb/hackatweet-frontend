import styles from '../styles/Modal.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/user';
import Link from 'next/link';

function SignIn() {
    const dispatch = useDispatch();
    const [signInUsername, setSignInUsername] = useState("");
    const [signInPassword, setSignInPassword] = useState("");

    const handleConnection = () => {
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ username: signInUsername, token: data.token, firstname: data.firstname }));
                    setSignInUsername('');
                    setSignInPassword('');
                }
            });
    };

    return (
        <div className={styles.content}>
            <Image className={styles.logo} src="/logo-twitter-blanc-png.png" alt="logo" width={50} height={50}/>
            <h2 style={{ color: "white" }}>HELLO I AM SIGN IN</h2>
            <input type="text" placeholder="Username" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
            <input type="password" placeholder="Password" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
            <Link href={"/"}>
                <button id="connection" onClick={() => handleConnection()} style={{ width: 200 }} >
                    Connect
                </button>
            </Link>
        </div>
    );
};

export default SignIn;