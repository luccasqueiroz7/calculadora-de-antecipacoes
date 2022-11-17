import Calculator from "../../components/calculator";
import Results from "../../components/results";
import { HomepageDiv } from "./style";

const Homepage = () => {
  return (
    <HomepageDiv>
      <Calculator />
      <Results />
    </HomepageDiv>
  );
};

export default Homepage;
