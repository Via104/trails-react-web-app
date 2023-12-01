import './App.css';
import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Trails from "./Trails"

function App() {

   
  return (
    <HashRouter>
       <div>
          <Routes>
             <Route path="/Trails/*" element={<Trails/>}/>
          </Routes>
       </div>
    </HashRouter>
 );
}

export default App;
