import Counter from "./Components/Counter/Counter";
import { Fragment } from "react";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import { useSelector } from "react-redux";
import Profile from "./Components/Profile/Profile";




function App() {
  const isUserLoggedIn = useSelector((state)=> state.auth.isLoggedIn);
  return (
    <div className="App">
     <Fragment>
        <Header />
       {!isUserLoggedIn ? <Login /> :
        <Profile />}
        <Counter />
     </Fragment>
    </div>
  );
};

export default App;


/**
 * useState
 * useReducer
 *
 * props chain
 * App.js -> loggedIn
 *  Header.js -> loggedIn
 *    RightMenu.js -> loggedIn
 *      Leftmenu.js -> loggedIn
 *        Logout.js -> loggedIn  - only needed here
 *
 * Application wide state
 * file.js -> all the state
 * loggedin
 * Redux - central state management library
 *
 * reducer function - inital state ,
 *
 * one store - place where you will add all your states,
 * every store will have one and only one reducer function
 * 30 states
 *
 * subscribtion - component gets the data from store - useSelector
 *
 * dispatch - action
 *
 *------------------
 * increase by num , incremnet, decrement - buttons
 * show value - button
 * redux store - counter value, showvalue
 *
 */
