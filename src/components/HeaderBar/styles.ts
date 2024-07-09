import styled from "styled-components/native";

export const AppBarContainer = styled.View<{backgroundColor: string}>`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 7px;
    background-color: ${props => props.backgroundColor};
`;

export const Logo = styled.Text`
    font-size: 25px;
    font-weight: 900;
`;

export const LogoText = styled.Text<{color: string}>`
    color: ${props => props.color}
`;