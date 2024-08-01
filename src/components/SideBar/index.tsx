import {useState, useContext} from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from "react-native-vector-icons/MaterialIcons";

import {useNavigation} from "@react-navigation/native";

import {ExitContainerLabel, ExitContainer, ListContainerItemLabel, ListContainerItem, SideBarContainer, PerfilContainer, PerfilImage, PerfilName, ListContainer} from "./styles";

import AuthContext from "../../contexts/auth";

export default function SideBar(){
    const {signOut} = useContext(AuthContext);

    const [currentScreen, setCurrentScreen] = useState("Início");

    const navigation = useNavigation();

    function handleSideBarNavigation(screen:string){
        navigation.navigate(screen);
        setCurrentScreen(screen);
    }

    async function handleSignOut(){
        signOut();
    }

    return (
        <SideBarContainer>
            <PerfilContainer>
                <PerfilImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oUwCkp9pTS763OIt605sXE7J32yx764HqQ&s"/>
                <PerfilName>Adolf Hitler</PerfilName>
            </PerfilContainer>
            <ListContainer>
                <ListContainerItem backgroundColor={currentScreen === "Início" ? "#EEE" : "#FFF"} onPress={() => handleSideBarNavigation("Início")}>
                    <Icon name="edit-note" size={35} color={currentScreen === "Início" ? "#ff6200" : "#333"}/>
                    <ListContainerItemLabel color={currentScreen === "Início" ? "#ff6200" : "#333"}>Início</ListContainerItemLabel>
                </ListContainerItem>
                <ListContainerItem backgroundColor={currentScreen === "Entregas" ? "#EEE" : "#FFF"} onPress={() => handleSideBarNavigation("Entregas")}>
                    <Icon name="local-shipping" size={35} color={currentScreen === "Entregas" ? "#ff6200" : "#333"}/>
                    <ListContainerItemLabel color={currentScreen === "Entregas" ? "#ff6200" : "#333"}>Entregas</ListContainerItemLabel>
                </ListContainerItem>
                <ListContainerItem backgroundColor={currentScreen === "Configurações" ? "#EEE" : "#FFF"} onPress={() => handleSideBarNavigation("Configurações")}>
                    <Icon name="settings" size={35} color={currentScreen === "Configurações" ? "#ff6200" : "#333"}/>
                    <ListContainerItemLabel color={currentScreen === "Configurações" ? "#ff6200" : "#333"}>Configurações</ListContainerItemLabel>
                </ListContainerItem>
                <ListContainerItem backgroundColor={currentScreen === "Suporte" ? "#EEE" : "#FFF"} onPress={() => handleSideBarNavigation("Chat de suporte")}>
                    <Icon name="support-agent" size={35} color={currentScreen === "Suporte" ? "#ff6200" : "#333"}/>
                    <ListContainerItemLabel color={currentScreen === "Suporte" ? "#ff6200" : "#333"}>Chat de suporte</ListContainerItemLabel>
                </ListContainerItem>
            </ListContainer>
            <ExitContainer onPress={handleSignOut}>
                <Icon name="exit-to-app" size={35} color="#f14927"/>
                <ExitContainerLabel>Sair do aplicativo</ExitContainerLabel>
            </ExitContainer>
        </SideBarContainer>
    );
}