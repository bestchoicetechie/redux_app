import styles from './Login.module.css';
import {useDispatch} from 'react-redux';
import { authActions} from '../../reduxstore/storeState';

const Login = () => {
    const dispatch = useDispatch();
    const loginHandler = () => {
        dispatch(authActions.login());
    };
  return (
    <main className={styles.login}>
        <section>
            <form onSubmit={loginHandler}>
                <div className={styles.control}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='enail' />
                </div>
                <div className={styles.control}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </section>
    </main>
  )
}

export default Login