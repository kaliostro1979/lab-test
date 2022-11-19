import {Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation";
import Tabs from "./pages/Tabs";
import TabsTwo from "./pages/TabsTwo";
import Posts from "./pages/Posts";
import Users from "./pages/Users";


function App() {
    return (
        <div className="App">
            <div className={'Container'}>
                <Navigation/>
                <Routes>
                    <Route path={'/tabs'} element={<Tabs/>}/>
                    <Route path={'/tabs-2'} element={<TabsTwo/>}/>
                    <Route path={'/posts'} element={<Posts/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
