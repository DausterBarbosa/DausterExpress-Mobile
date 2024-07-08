import styled from "styled-components/native";

export const PhotoDeliveryButton = styled.TouchableOpacity`
    width: 100px;
    height: 100px;
    background-color: #4d148c;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50px);
`;

export const PermissionFailedContainer = styled.View`
    flex: 1;
    background-color: #FFF;
    align-items: center;
    justify-content: center;
`;

export const PermissionFailedInfoContainer = styled.View`
    flex-direction: column;
    align-items: center;
`;

export const PermissionFailedInfoLabel = styled.Text`
    text-align: center;
    font-size: 17px;
    margin: 10px;
`;

export const PermissionFailedInfoButton = styled.TouchableOpacity`
    background-color: #4d148c;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 50px;
`;

export const PermissionFailedInfoButtonLabel = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 15px;
`;

export const ActionsButtonContainer = styled.View`
    flex-direction: row;
    position: absolute;
    bottom: 20px;
    left: 50%;
    align-items: center;
    transform: translateX(-120px);
`;

export const ActionsButton = styled.TouchableOpacity<{
    backgroundColor: string;
    marginRight?: string;
}>`
    background-color: ${props => props.backgroundColor};
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    margin-right: ${props => props.marginRight};
`;