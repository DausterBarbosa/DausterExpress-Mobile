import styled from "styled-components/native";

export const DeliveriesInfoPage = styled.ScrollView`
    flex: 1;
    background-color: #FFF;
`;

export const DeliveriInfoContainer = styled.View`
    padding: 10px;
`;

export const DeliveriPageLabelContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ActionsContainer = styled.View`
    padding: 10px;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;

export const ButtonContainer = styled.TouchableOpacity`
    background-color: #f8f9fd;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: 1px solid #EEE;
    flex: 1;
`;

export const StatusContainer = styled.View`
    padding: 10px;
`;

export const StatusContainerTag = styled.Text`
    background: red;
    font-weight: bold;
    color: #FFF;
    background-color: #4d148c;
    font-size: 15px;
    border-radius: 100px;
    text-align: center;
    padding: 5px;
    width: 150px;
`;

export const StatusContainerItem = styled.View`
    flex-direction: row;
    align-items: center;
    elevation: 5;
    background: #FFF;
    padding: 5px;
    margin-top: 15px;
    border-radius: 100px;
`;

export const StatusContainerItemLabels = styled.View`
    margin-left: 10px;
`;