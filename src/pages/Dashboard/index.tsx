import {Text} from "react-native";

import FocusStatusBar from "../../components/FocusStatusBar";

import {StatusContainer, StatusBoxContainer, StatusBox, DashboardPage, WelcomeContainer, WelcomeLabelContainer} from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";

export default function Dashboard(){
    return (
        <DashboardPage>
            <FocusStatusBar barStyle="light-content" backgroundColor="#4d148c"/>
            <WelcomeContainer>
                <WelcomeLabelContainer fontSize="25px" fontWeight="bold">Olá, Dauster Barbosa</WelcomeLabelContainer>
                <WelcomeLabelContainer fontSize="17px" fontWeight="300">Bem vindo ao DausterExpress logística</WelcomeLabelContainer>
            </WelcomeContainer>
            <StatusContainer>
                <Text style={{fontSize: 20, fontWeight: "bold", color: "#494E5D"}}>Status das Entregas</Text>
                <StatusBox backgroundColor="#b491e4">
                    <Text style={{fontSize: 45, fontWeight: "bold", color: "#FFF"}}>22</Text>
                    <StatusBoxContainer>
                        <Icon name="pending" size={50} color="#FFF"/>
                        <Text  style={{fontSize: 15, color: "#FFF"}}>Entregas pendentes</Text>
                    </StatusBoxContainer>
                </StatusBox>
                <StatusBox backgroundColor="#fa9657">
                    <Text style={{fontSize: 45, fontWeight: "bold", color: "#FFF"}}>22</Text>
                    <StatusBoxContainer>
                        <Icon name="arrow-circle-right" size={50} color="#FFF"/>
                        <Text  style={{fontSize: 15, color: "#FFF"}}>Entregas em trânsito</Text>
                    </StatusBoxContainer>
                </StatusBox>
                <StatusBox  backgroundColor="#87d6b7">
                    <Text style={{fontSize: 45, fontWeight: "bold", color: "#FFF"}}>56</Text>
                    <StatusBoxContainer>
                        <Icon name="check-circle" size={50} color="#FFF"/>
                        <Text style={{fontSize: 15, color: "#FFF"}}>Entregas realizadas</Text>
                    </StatusBoxContainer>
                </StatusBox>
                <StatusBox  backgroundColor="#dec560">
                    <Text style={{fontSize: 45, fontWeight: "bold", color: "#FFF"}}>56</Text>
                    <StatusBoxContainer>
                        <Icon name="error" size={50} color="#FFF"/>
                        <Text style={{fontSize: 15, color: "#FFF"}}>Entregas com problemas</Text>
                    </StatusBoxContainer>
                </StatusBox>
                <StatusBox  backgroundColor="#e6a396">
                    <Text style={{fontSize: 45, fontWeight: "bold", color: "#FFF"}}>78</Text>
                    <StatusBoxContainer>
                        <Icon name="cancel" size={50} color="#FFF"/>
                        <Text style={{fontSize: 15, color: "#FFF"}}>Entregas canceladas</Text>
                    </StatusBoxContainer>
                </StatusBox>
            </StatusContainer>
        </DashboardPage>
    );
}