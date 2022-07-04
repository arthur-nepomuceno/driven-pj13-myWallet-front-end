import '../styles/reset.css';
import '../styles/styles.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Main from './Main';
import NewCheckIn from './NewCheckIn';
import NewCheckOut from './NewCheckOut';
import EditCheckIn from './EditCheckIn';
import EditCheckOut from './EditCheckOut';
import DataContext from '../contexts/DataContext';

export default function App(){
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const contextData = {user, setUser, transactions, setTransactions};
  return(
    <BrowserRouter>
      <DataContext.Provider value={contextData}>
          <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/main' element={<Main/>}/>
            <Route path='/new-check-in' element={<NewCheckIn/>}/>
            <Route path='/new-check-out' element={<NewCheckOut/>}/>
            <Route path='/edit-check-in/:id' element={<EditCheckIn/>}/>
            <Route path='/edit-check-out/:id' element={<EditCheckOut/>}/>
          </Routes>
      </DataContext.Provider>
    </BrowserRouter>
  )
}