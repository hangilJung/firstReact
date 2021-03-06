import './App.css';
import Hello from './component/Hello';
import styles from './App.module.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">
            <DayList/>
          </Route>
          <Route path="/day/:day">
            <Day/>
          </Route>
          <Route path="/create_word">
            <CreateWord/>
          </Route>   
          <Route path="/create_day">
            <CreateDay/>
          </Route>     
          <Route>                                                         
            <EmptyPage/>
          </Route>
        </Switch>
        <h3>props: properties</h3>
        <Hello age={10}/>
        <Hello age={20}/>
        <Hello age={30}/>
        <div className={styles.box}>app</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
