import { Route, Routes } from 'react-router-dom';
import Display from './Display/Display';
import Nav from './Nav/Nav';
import Notfound from './Notfound/Notfound';

export default function Main() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/display/:r/:g/:b" element={<Display />}/>
        <Route path="*" element={<Notfound />} />
      </Routes>  
    </>
  );
}