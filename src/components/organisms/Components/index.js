import React, { useState } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

//Components
import { Button } from 'components';
import { SearchBar } from 'components';

const ComponentsContainer = styled.div`
    display: flex;
    background-color: LightSteelBlue;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 1024px;
    margin: auto;
    font-family: ${font('primary')};
`;

const ColorPicker = styled.div`
    display: flex;
    margin: 0px 25px;
    width: 200px;
    justify-content: space-around;
`;

const AllColorPicker = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    flex-direction: column;
    flex-wrap: wrap;
`;

const SquareBlue = styled.div`
    width: 25px;
    height: 25px;
    background-color: blue;
`;

const SquareRed = styled.div`
    width: 25px;
    height: 25px;
    background-color: red;
`;

const SquareYellow = styled.div`
    width: 25px;
    height: 25px;
    background-color: yellow;
`;

const SquareGreen = styled.div`
    width: 25px;
    height: 25px;
    background-color: green;
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
                        <AllColorPicker>
                            <SquareBlue onClick={() => setButtonBackgroundColor('blue')} />
                            <SquareRed onClick={() => setButtonBackgroundColor('red')} />
                            <SquareYellow onClick={() => setButtonBackgroundColor('yellow')} />
                            <SquareGreen onClick={() => setButtonBackgroundColor('green')} />
                        </AllColorPicker>
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
