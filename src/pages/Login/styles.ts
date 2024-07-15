import styled from "styled-components/native";

export const LoginPage = styled.View`
    flex: 1;
    background-color: #FFF;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const Logo = styled.Text`
    font-size: 40px;
    font-weight: 900;
`;

export const LogoText = styled.Text<{color: string}>`
    color: ${props => props.color}
`;

export const LoginTextField = styled.TextInput`
    background-color: #EEE;
    width: 100%;
    margin-top: 15px;
    font-size: 17px;
    padding: 10px;
`;

export const LoginButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: #ff6200;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
`;

export const LoginButtonLabel = styled.Text`
    font-weight: bold;
    color: #FFF;
    font-size: 17px;
`;