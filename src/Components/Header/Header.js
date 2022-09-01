import styles from './Header.module.css';
import {useSelector, useDispatch } from 'react-redux';
import {authActions} from '../../reduxstore/storeState';

const Header = () => {
    const isuserLoggedIn = useSelector((state)=> state.auth.isLoggedIn);

    const dispatch = useDispatch();
    const logoutHandler = () =>{
        dispatch(authActions.logout());
    };
  return (
    <header className={styles.header}>
        <nav>
            <ul>
               {isuserLoggedIn ?  (<li>
                    <a href="#">Profile</a>
                </li>): ('')}
                <li>
                    <a href="#">Settings</a>
                </li>
                {isuserLoggedIn ? (  <li>
                    <button onClick={logoutHandler}>Logout</button>
                </li>) : (
                    ''
                    )}
            </ul>
        </nav>
    </header>
  )
}

export default Header