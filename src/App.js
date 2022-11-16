import Homepage from "./pages/homepage";
import { Main } from "./style";
import { GlobalStyle } from "./style";

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Homepage />
      </Main>
    </>
  );
}

export default App;
