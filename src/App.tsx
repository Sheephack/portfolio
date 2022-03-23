//@ts-check
import { ThemeProvider } from "styled-components";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainTittle from "./components/MainTittle";
import InfoSection from "./components/InfoSection";
import { GlobalStyles } from "./components/styles/Global";
import { useDarkMode } from "./components/styles/useDarkMode";

// const theme = {
//   colors: {
//     header: '#fff',
//     body: '#ffffff',
//     footer: '#121212',
//   }
// }

function App() {
  const [theme, toggleTheme] = useDarkMode();
  console.log(theme)

  return (
    // <ThemeProvider theme={ theme }>
    <>
      <GlobalStyles />
      <Header />
      <Sidebar />
      <MainTittle />
      <InfoSection />
   {/* </ThemeProvider> */}
    </>
  );
}

export default App;
