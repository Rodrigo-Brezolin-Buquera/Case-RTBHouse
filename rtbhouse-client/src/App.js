import { Header } from "./components/header";
import { MainPage } from "./pages/mainPage";
import { GlobalStyled } from "./theme";


function App() {
  return (
    <>
      <GlobalStyled/>
      <Header />
      <MainPage/>
    </>
  );
}

export default App;
