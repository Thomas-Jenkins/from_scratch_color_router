import { Switch } from 'react-router-dom';
import Display from './Display/Display';
import Nav from './Nav/Nav';


export default function Main() {
  return (
    <>
      <Nav />
      <Switch>
        <Display />
      </Switch>  
    </>
  );
}