import styled from "styled-components/native";

export const SettingsPage = styled.View`
    flex: 1;
    background-color: #FFF;
    padding: 20px;
`;

export const SettingsPageOptionContainer = styled.TouchableOpacity`
    margin-top: 15px;
    padding: 15px;
    flex-direction: row;
    align-items: center;
    background-color: #FFF;
    elevation: 5;
`;

export const SettingsPageInfoContainer = styled.View`
    flex-direction: column;
    margin-left: 10px;
`;

export const SettingsPageOptionContainerTitle = styled.Text`
    font-weight: bold;
    font-size: 17px;
    color: #333;
`;

export const SettingsPageOptionContainerLabel = styled.Text`
    font-size: 15px;
`;