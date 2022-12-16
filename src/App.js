

import './App.css';
import {Nav} from "./Components/Nav"
import {BrowserRouter,Routes,Route} from"react-router-dom";
import {AboutUs} from "./Components/AboutUs"
import {Card,CardContent} from "@mui/material"
 


function App() {
  return (
    <div className="App">


      <BrowserRouter>       
      <Card>
        <CardContent>
        <Nav/>
        </CardContent>
        </Card>      
          <Routes>           
            <Route path="/aboutus" element={ <AboutUs/>} />  
          </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
