import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import About from "./pages/about/About";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



const App = () => {

const{theme, toggleTheme} = useTheme();

    return (
       <div className={classNames('app',{}, [theme])}>
           <Link to={'about'}>Перейти</Link>
           <button onClick={toggleTheme}>переключить тему</button>
           <Routes>
               <Route path={'/'}/>
               <Route path={'/about'} element={<About/>}/>
           </Routes>
       </div>
    )
}


export default App;