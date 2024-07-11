import styled from "styled-components/native";

export const SideBarContainer = styled.View`
    flex: 1;
`;

export const PerfilContainer = styled.View`
    flex: 0.3;
    align-items: center;
    justify-content: center;
`;

export const PerfilImage = styled.Image`
    height: 130px;
    width: 130px;
    border-radius: 100px;
`;

export const PerfilName = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
`;

export const ListContainer = styled.View`
    flex: 0.6;
    padding: 10px;
`;

export const ListContainerItem = styled.TouchableOpacity<{backgroundColor?: string}>`
    flex-direction: row;
    align-items: center;
    padding: 10px;
    background-color: ${props => props.backgroundColor};
    border-radius: 5px;
`;

export const ListContainerItemLabel = styled.Text<{color: string}>`
    margin-left: 30px;
    font-size: 17px;
    font-weight: bold;
    color: ${props => props.color};
`;

export const ExitContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExitContainerLabel = styled.Text`
    margin-left: 10px;
    font-size: 17px;
    font-weight: bold;
    color: #333;
`;