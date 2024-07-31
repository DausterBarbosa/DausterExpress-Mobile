import styled from "styled-components/native";

export const ProfilePage = styled.View`
    flex: 1;
    background-color: #FFF;
    padding: 20px;
`;

export const ProfilePhotoContainer = styled.View`
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const ProfilePhotoEmpty = styled.View`
    width: 150px;
    height: 150px;
    background-color: #EEE;
    border-radius: 100px;
    position: relative;
    align-items: center;
    justify-content: center;
`;

export const ProfilePhoto = styled.ImageBackground`
    width: 150px;
    height: 150px;
    border-radius: 100px;
    position: relative;
    align-items: center;
    justify-content: center;
`;

export const ChangeProfilePhotoButton = styled.TouchableOpacity`
    background-color: #ff6200;
    position: absolute;
    bottom: 5px;
    right: 5px;
    border-radius: 100px;
    padding: 10px;
`;

export const ProfilePhotoLabel = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
    color: #333;
`;

export const InfoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`;

export const InfoContainerDescription = styled.Text`
    margin-left: 15px;
    font-size: 17px;
    font-weight: bold;
    color: #333;
`;