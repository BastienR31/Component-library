import React, { useState } from 'react';
import styled from 'styled-components';

const ComponentsContainer = styled.div`
    display: flex;
    background-color: LightSteelBlue;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

//Components
import { Button } from 'components';
import { SearchBar } from 'components';

const ColorPicker = styled.div`
    display: flex;
`;

const SquareBlue = styled.div`
    width: 40px;
    height: 40px;
    background-color: blue;
`;

const Components = () => {

    const [buttonBackgroundColor, setButtonBackgroundColor] = useState('white');

    return (
        <ComponentsContainer>
            <h1>Watch your components :</h1>

            <div style={{ display: "flex", flexDirection: "column" }}>

                <h2>Component button</h2>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Button
                        size={"large"}
                        color={"black"}
                        backgroundColor={buttonBackgroundColor}
                        textButton={"Button"}
                    />

                    <ColorPicker>
                        <SquareBlue onClick={() => setButtonBackgroundColor('blue')} />
                        <button type="button" onClick={() => setButtonBackgroundColor('white')}>Reset all</button>
                    </ColorPicker>
                </div>
            </div>

            <br />

            <div>

                <h2>Component search bar</h2>

                <SearchBar />
            </div>
        </ComponentsContainer >
    );
};

export default Components;
