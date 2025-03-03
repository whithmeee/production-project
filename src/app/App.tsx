import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import './styles/index.scss';
import { AppRouter } from "app/providers/Router";



const App = () => {
const{theme, toggleTheme} = useTheme();
    return (
       <div className={classNames('app',{}, [theme])}>
           <Link to={'about'}>Перейти</Link>
           <button onClick={toggleTheme}>переключить тему</button>
           <AppRouter/>
       </div>
    )
}


export default App;