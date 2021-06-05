import { Provider } from "react-redux"
import store from './redux/store'
import icon from './sun.svg';
import WeatherView from "./components/WeatherView"
import './App.css';
import Popup from "./components/Popup";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <img src={icon} className="back-icon" alt="icon" style={{ top: "5vh", left: "3vw",height: "50px", width:"50px" }} />
        
        <WeatherView />
        <Popup />
       
        
        <img src={icon} className="back-icon" alt="icon" style={{ bottom: "5vh", right: "3vw",height: "50px", width:"50px" }} />
      </div>
    </Provider>
  );
}

export default App;
