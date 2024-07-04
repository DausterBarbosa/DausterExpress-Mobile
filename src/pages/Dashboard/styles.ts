import styled from "styled-components/native";

export const DashboardPage = styled.View`
    flex: 1;
    background-color: #FFF;
`;

export const AppBarContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 7px;
    background-color: #4d148c;
`;

export const Logo = styled.Text`
    font-size: 25px;
    font-weight: 900;
`;

export const LogoText = styled.Text<{color: string}>`
    color: ${props => props.color}
`;

export const WelcomeContainer = styled.View`
    background-color: #4d148c;
    height: 110px;
    border-bottom-right-radius: 200px;
    padding: 20px;
`;

export const WelcomeLabelContainer = styled.Text<{
    fontSize: string;
    fontWeight: string;
}>`
    color: #FFF;
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
`;

export const StatusContainer = styled.ScrollView`
    padding: 15px;
`;

export const StatusBox = styled.View<{backgroundColor: string}>`
    background-color: ${props => props.backgroundColor};
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    margin-top: 10px;
`;

export const StatusBoxContainer = styled.View`
    margin-left: 10px;
`;