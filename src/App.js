import { useState } from "react";
import Homepage from "./pages/homepage";
import { ButtonPersonalized, DarkModeDiv, Main } from "./style";
import { GlobalStyle } from "./style";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const darkModeFunction = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Main dark={darkMode}>
      <GlobalStyle />
      <DarkModeDiv>
        <BsFillSunFill />
        <ButtonPersonalized
          change={darkMode ? "135%" : "0"}
          onClick={darkModeFunction}
        >
          <div></div>
        </ButtonPersonalized>
        <BsMoonStarsFill style={{ transform: "rotateY(180deg)" }} />
      </DarkModeDiv>
      <Homepage />
    </Main>
  );
}

export default App;
