import { Link } from "react-router-dom";
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

const App = () => {
  const {theme, toggleTheme} = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme] )}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>ABOUT</Link>
      <AppRouter />
    </div>
  )
}

export default App