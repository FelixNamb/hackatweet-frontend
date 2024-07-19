import styles from '../styles/Modal.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/user';
import Link from 'next/link';

function SignIn() {
    const dispatch = useDispatch();
    const [signUpFirstname, setSignUpFirstname] = useState("");
    const [signUpUsername, setSignUpUsername] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");

    const handleConnection = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ username: signUpUsername, token: data.token, firstname: signUpFirstname }));
                    setSignUpUsername('');
                    setSignUpPassword('');
                    setSignUpFirstname('');
                }
            });
    };

    return (
        <div className={styles.content}>
            <Image className={styles.logo} src="/logo-twitter-blanc-png.png" alt="logo" width={50} height={50}/>
            <h2 style={{ color: "white" }}>HELLO I AM SIGN IN</h2>
            <input type="text" placeholder="Firstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
            <input type="text" placeholder="Username" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
            <input type="password" placeholder="Password" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
            <Link href={"/home"}>
                <button id="connection" onClick={() => handleConnection()} style={{ width: 200 }} >
                    Connect
                </button>
            </Link>
        </div>
    );
};

export default SignIn;