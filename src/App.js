import React, { useState } from "react";
import Display from "./Display";
import Roll from "./Roll";
import styledComp from "styled-components";

const CenterDiv = styledComp.div`
    font-color: #320866; 
    color: #3f0a81;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`

const Title = styledComp.h2`
    color: #a160f2; 
    font-size: 64px;
    font-family: 'Ephesis', cursive;
    position: absolute;
    top: 25%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`

function App() {

  const [d20, setD20] = useState(0);
  const [d100, setD100] = useState(0);
  const [showDisplay, setShowDisplay] = useState(false);

  return (
      <div className="App">
        <Title>Saria's Wild Magic</Title>
        <CenterDiv>
        {!showDisplay && <Roll d20Obj={[d20, setD20]} d100Obj={[d100, setD100]} setShowDisplay={setShowDisplay} />}
        {showDisplay && 
          <div>
              <Display d20={d20} d100={d100} setShowDisplay={setShowDisplay}/>
          </div>
        }
            </CenterDiv>
      </div>
  );
}

export default App;
