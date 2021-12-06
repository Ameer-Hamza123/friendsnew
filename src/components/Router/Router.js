import {Routes, Route} from 'react-router'
import Home from '../Home/Home';
import Settings from '../Settings/Setttings';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';

const Routers = () =>{
    return(
        <>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/settings" element={<Settings/>}></Route>
        </Routes>
        </>
    )
}
export default Routers;