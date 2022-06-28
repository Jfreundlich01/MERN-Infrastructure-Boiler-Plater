import './App.css';
import { useState } from 'react';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import {getUser} from "../../utilities/users-service"

export default function App() {
  const [user,setUser] = useState(getUser())
  console.log(user)
  return (
    <main className="App">
      {user ? 
        <>
        <Navbar user={user} setUser={setUser}/>
        <Routes>
          {/* Route Compnents in Here  */}
          <Route path="/orders/new" element={<NewOrderPage />}></Route>
          <Route path="/orders" element={<OrderHistoryPage />}></Route>
        </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

