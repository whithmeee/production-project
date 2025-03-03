import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider/index";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import './styles/index.scss';
import {Suspense} from "react";



const App = () => {

const{theme, toggleTheme} = useTheme();

    return (
       <div className={classNames('app',{}, [theme])}>
           <Link to={'about'}>Перейти</Link>
           <button onClick={toggleTheme}>переключить тему</button>
           <Suspense fallback={() => <div>Loading...</div>}>
               <Routes>
                   <Route path={'/'} element={<MainPage/>}/>
                   <Route path={'/about'} element={<AboutPage/>}/>
               </Routes>
           </Suspense>

       </div>
    )
}


export default App;