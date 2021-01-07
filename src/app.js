import React from 'react';
import styled from 'styled-components';

const TitleBlock = styled.div`
    font-size:20px;
    font-weight:bold;
    span{
        color:red;
    }
`

function App(){
    return (
        <TitleBlock><span>efwef</span></TitleBlock>
    )
}

export default App;