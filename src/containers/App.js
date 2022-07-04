import '../styles/reset.css';
import '../styles/styles.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from './SignUp';
import SignIn from './SignIn';
import Main from './Main';
import NewCheckIn from './NewCheckIn';
import NewCheckOut from './NewCheckOut';
import EditCheckIn from './EditCheckIn';
import EditCheckOut from './EditCheckOut';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/new-check-in' element={<NewCheckIn/>}/>
        <Route path='/new-check-out' element={<NewCheckOut/>}/>
        <Route path='/edit-check-in' element={<EditCheckIn/>}/>
        <Route path='/edit-check-out' element={<EditCheckOut/>}/>
      </Routes>
    </BrowserRouter>
  )
}