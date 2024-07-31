import styled from "styled-components/native";

export const DeliveriesPage = styled.View`
    flex: 1;
    background-color: #FFF;
`;

export const ToolsBarContainer = styled.View`
    padding: 10px;
    background: #FFF;
`;

export const SearchBarContainer = styled.View`
    flex-direction: row;
    margin-top: 10px;
    align-items: center;
`;

export const SearchBarInput = styled.TextInput`
    flex: 1;
    background-color: #EEE;
    border-radius: 20px;
    font-size: 17px;
    padding: 10px 15px;
`;

export const SearchBarButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 5px;
`;

export const ListContainer = styled.View`
    position: absolute;
    background-color: #FFF;
    width: 150px;
    top: 40px;
    right: 10px;
    elevation: 15;
`;

export const ListContainerButton = styled.TouchableHighlight`
    padding: 10px;
`;

export const ListContainerLabel = styled.Text`
    font-size: 17px;
    color: #494E5D;
    margin-right: 5px;
`;

export const ListLabelContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 5px;
`;

export const ListItemContainer = styled.View`
    padding: 10px;
`;

export const ItemContainer = styled.TouchableOpacity`
    background: #FFF;
    elevation: 5;
    margin-top: 5px;
    flex-direction: row;
`;

export const ItemContainerStatus = styled.View<{backgroundColor: string}>`
    padding: 20px;
    align-items: center;
    justify-content: center;
    background-color: green;
    width: 80px;
    background-color: ${props => props.backgroundColor};
`;

export const ItemInfoContainer = styled.View`
    flex: 1;
    padding: 5px 15px;
`;

