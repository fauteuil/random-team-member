import { Router } from "react-router-dom";
import styled from "styled-components";
import "./styles.css";
import { TeamList } from "./TeamList";
import { TeamMember } from "./TeamMember";

const AppStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export default function App() {
  return (
    <>
      <h1>Hello Peer Reviewers</h1>
      <AppStyled className="App">
        <TeamList />
        <TeamMember />
      </AppStyled>
    </>
  );
}
