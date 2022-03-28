//@ts-check
import { ThemeProvider } from "styled-components";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainTittle from "./components/MainTittle";
import { GlobalStyles, lightTheme, darkTheme } from "./components/styles/Global";
import { useDarkMode } from "./components/styles/useDarkMode";
import { Routes, Route } from "react-router-dom";





function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  
  return (
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Sidebar />
        <Routes>
            <Route path="/" element={<MainTittle theme={theme} />}/>
      
            
        
        </Routes>
            
      </ThemeProvider>
  );
}

export default App;
