import {BrowserRouter,Route,Routes} from "react-router-dom"
import CVTemplate from "./CV/HTML/CVTemplate/CVTemplate";
import CV from './CV/compunemt/CV';
import MyPortfolio from "./CV/HTML/My Portfolio/MyPortfolio";
import TheBand from "./CV/HTML/TheBand/TheBand";
import MainProject from "./CV/MyProject/MainProject";
import Todolist from "./CV/Todolist/Todolist";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<CV></CV>} path="/"></Route>
        </Routes>
        <Routes>
            <Route element={<MainProject></MainProject>} path="/MainProject"> </Route>
            <Route element={<TheBand></TheBand>} path="/MainProject/HTML/TheBand"> </Route>
            <Route element={<MyPortfolio></MyPortfolio>} path="/MainProject/HTML/MyPortfolio"> </Route>
            <Route element={<CVTemplate></CVTemplate>} path="/MainProject/HTML/CVTemplate"> </Route>
            <Route element={<CVTemplate></CVTemplate>} path="/MainProject/HTML/CVTemplate"> </Route>
            <Route element={<Todolist></Todolist>} path="/MainProject/Todolist"> </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
