import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useData } from "../Context";

const Font = styled.h1`
font-family: monospace;
color: white;
`;
const OutterContainer = styled.div`
display: flex;
justify-content: center;
`;
const MidContainer = styled.div`
flex-direction: column;
justify-content: center;
`;
const InnerContainer = styled.div`
display: block;
justify-content: center;
`;

export default function App() {
  // const data = useData();

  return (
    <div>
      <OutterContainer>
        <MidContainer>
          <InnerContainer>
            <InnerContainer>
              <Font>Daurham.com</Font>
              <Font as={'h3'}>🚧 Under Construction 🚧</Font>
            </InnerContainer>


            <hr />
              <br />
              <br />
              <br />
            <Font as={'label'}>Projects:
              <br />
              <Font as={'a'} style={{ fontSize: 'small' }} href="https://github.com/daurham">Github</Font>
              <br />
              <Font as={'a'} style={{ fontSize: 'small' }} href="https://instagram.com/captain_daurham">Instagram</Font>
            </Font>
          </InnerContainer>
        </MidContainer>
      </OutterContainer>
    </div>
  );
};