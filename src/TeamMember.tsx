import React from "react";
import { useQuery } from "./useQuery";
import { randomInt } from "@dmhtoo/random-int";
import styled from "styled-components";
import randomRgba from "random-rgba";

const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const MemberStyled = styled.div`
  font-size: 3rem;
  padding: 1rem;
  background-color: ${randomRgba(17)};
  color: ${randomRgba(97)};
`;

export function TeamMember() {
  const members: string[] = useQuery().valueByKey("team").trim().split(",");

  console.log("members", members);
  const randomIndex = randomInt(0, members.length - 1);

  return (
    <MemberWrapper>
      <div>And the reviewer is...</div>
      <MemberStyled>{members[randomIndex]}</MemberStyled>
    </MemberWrapper>
  );
}
