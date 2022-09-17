import { useEffect } from "react";
import "./App.css";
import KinoSingleComp from "./Components/KinoSingle.comp";
import { useDispatch, useSelector } from "react-redux";
import fetch_data from "./Store/actions/fetch_data.action";
import styled from "styled-components";

function App() {
  const kino = useSelector((state) => state.kino);

  console.log(kino);
  const dispatch = useDispatch();

  useEffect(() => {
    // The api is not working
    dispatch(fetch_data());
  }, []);

  return (
    <Container>
      <h1>Kino</h1>
       <KinoContainer>
        {kino.map((kinoGame, index) => (
          <KinoSingleComp key={index} {...kinoGame} />
        ))}
        {kino.map((kinoGame, index) => (
          <KinoSingleComp key={index} {...kinoGame}/>
        ))}
        {kino.map((kinoGame, index) => (
          <KinoSingleComp key={index} {...kinoGame} />
        ))}
      </KinoContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  height: 100vh;
  color: #fff;
`;

const KinoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  margin: 0 1rem;
  @media (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default App;
