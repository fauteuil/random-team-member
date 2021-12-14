import React from "react";
import { useQuery } from "./useQuery";
import styled from "styled-components";

const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export function TeamList() {
  const team: string[] = useQuery().valueByKey("team").trim().split(",");

  function teamList() {
    return team.map((member) => <div>{member}</div>);
  }

  return (
    <MemberWrapper>
      <div>The team:</div>
      {teamList()}
    </MemberWrapper>
  );
}
