import {  Image } from '@chakra-ui/react';
import logo from "./assets/logo.png";
import { LaunchDetails } from "./components/LaunchDetails";
import { LaunchList } from "./components/LaunchList";
import { Routes, Route,  } from "react-router-dom";
import { RocketDetails } from './components/RocketDetails';

export function App() {
  return (
    <>
      <Image src={logo} width={300} m={4} />
      <Routes>
        <Route path="/" element={<LaunchList/>} />
        <Route path="launch/:id" element={<LaunchDetails />} />
        <Route path="rockets/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
  );

}