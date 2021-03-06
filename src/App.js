import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
                 render={() => <DialogsContainer/>}/>
          <Route path='/profile'
                 render={() => <Profile/>}/>
          <Route path='/news'
                 render={() => <News/>}/>
          <Route path='/music'
                 render={() => <Music/>}/>
          <Route path='/settings'
                 render={() => <Settings/>}/>
          <Route path='/users'
                 render={() => <UsersContainer/>}/>
        </div>
      </div>
  );
}

export default App;
