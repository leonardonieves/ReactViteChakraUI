import {  Image } from '@chakra-ui/react';
import logo from "./assets/logo.png";
import { LaunchDetails } from "./components/LaunchDetails";
import { LaunchList } from "./components/LaunchList";
import { Routes, Route,  } from "react-router-dom";
import { RocketDetails } from './components/RocketDetails';
import { LoginButton } from './components/Login';
import { LogoutButton } from './components/Logout';
import { Profile } from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

export function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Image src={logo} width={300} m={4} />
      {isAuthenticated ?
        (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : 
        (
          <LoginButton />
        )      
      }      
      <Routes>
        <Route path="/" element={<LaunchList/>} />
        <Route path="launch/:id" element={<LaunchDetails />} />
        <Route path="rockets/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
  );

}