import React, { useState } from 'react';
import styled from 'styled-components';

import { Search } from '@material-ui/icons';

const StyledSearchBar = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 300px;
`;

const StyledInput = styled.input`

    width: 300px;
    height: 35px;
    border: none;
    border-radius: 3px;
    padding: 3px 6px;
    font-size: 15px;

`;

const SearchBar = (
    { }
) => {
    return (
        <StyledSearchBar>
            <StyledInput
                placeholder="Placeholder"
            >
            </StyledInput>
            <Search style={{ fontSize: 25, color: "black", position: "absolute", right: "5px" }} />
        </StyledSearchBar>
    );
};

export default SearchBar;
