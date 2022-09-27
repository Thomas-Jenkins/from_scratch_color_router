import { Route, Switch } from 'react-router-dom';
import Display from './Display/Display';
import Nav from './Nav/Nav';
import Notfound from './Notfound/Notfound';

export default function Main() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/display/:r/:g/:b" component={Display}/>
        <Route exact path="*" component={Notfound} />
      </Switch>  
    </>
  );
}