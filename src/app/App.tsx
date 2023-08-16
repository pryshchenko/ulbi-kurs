import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from 'app/providers/router';

const App = () => {
  const {theme, toggleTheme} = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme] )}>
      <Navbar />
      <button onClick={toggleTheme}>toggle</button>
      <AppRouter />
    </div>
  )
}

export default App