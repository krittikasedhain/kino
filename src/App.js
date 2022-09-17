import { useEffect } from "react";
import "./App.css";
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
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  height: 100vh;
  color: #fff;
`;

export default App;
