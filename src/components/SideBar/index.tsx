import {useState, useContext} from "react";

import Icon from "react-native-vector-icons/MaterialIcons";

import {useNavigation, useRoute, getFocusedRouteNameFromRoute} from "@react-navigation/native";

import {ProfilePhotoEmpty, ExitContainerLabel, ExitContainer, ListContainerItemLabel, ListContainerItem, SideBarContainer, PerfilContainer, PerfilImage, PerfilName, ListContainer} from "./styles";

import AuthContext from "../../contexts/auth";

export default function SideBar(){
    const route = useRoute();

    const {signOut, user} = useContext(AuthContext);

    const [currentScreen, setCurrentScreen] = useState("Início");

    const navigation = useNavigation();

    function handleSideBarNavigation(screen:string){
        navigation.navigate(screen);
        setCurrentScreen(screen);
    }

    function getCurrentPage(){
        return getFocusedRouteNameFromRoute(route);
    }

    async function handleSignOut(){
        signOut();
    }

    return (
        <SideBarContainer>
            <PerfilContainer>
                {user?.url_image_profile === null ? (
                    <ProfilePhotoEmpty>
                        <Icon name="person" size={70} color="#333"/>
                    </ProfilePhotoEmpty>
                ) : (
                    <PerfilImage src={user?.url_image_profile}/>
                )}
                <PerfilName>{user?.nome + " " + user?.sobrenome}</PerfilName>
            </PerfilContainer>
            <ListContainer>
                <ListContainerItem backgroundColor={getCurrentPage() === "Início" ? "#EEE" : "#FFF"} onPress={() => handleSideBarNavigation("Início")}>
                    <Icon name="edit-note" size={35} color={getCurrentPage() === "Início" ? "#ff6200" : "#333"}/>
                    <ListContainerItemLabel color={getCurrentPage() === "Início" ? "#ff6200" : "#333"}>Início</ListContainerItemLabel>
                </ListContainerItem>
                <ListContainerItem backgroundColor={getCurrentPage() === "Entregas" ? "#EEE" : "#FFF"} onPress={() => handleSideBarNavigation("Entregas")}>
                    <Icon name="local-shipping" size={35} color={getCurrentPage() === "Entregas" ? "#ff6200" : "#333"}/>
                    <ListContainerItemLabel color={getCurrentPage() === "Entregas" ? "#ff6200" : "#333"}>Entregas</ListContainerItemLabel>
                </ListContainerItem>
                <ListContainerItem backgroundColor={getCurrentPage() === "Configurações" ? "#EEE" : "#FFF"} onPress={() => handleSideBarNavigation("Configurações")}>
                    <Icon name="settings" size={35} color={getCurrentPage() === "Configurações" ? "#ff6200" : "#333"}/>
                    <ListContainerItemLabel color={getCurrentPage() === "Configurações" ? "#ff6200" : "#333"}>Configurações</ListContainerItemLabel>
                </ListContainerItem>
                <ListContainerItem backgroundColor={getCurrentPage() === "Chat de suporte" ? "#EEE" : "#FFF"} onPress={() => handleSideBarNavigation("Chat de suporte")}>
                    <Icon name="support-agent" size={35} color={getCurrentPage() === "Chat de suporte" ? "#ff6200" : "#333"}/>
                    <ListContainerItemLabel color={getCurrentPage() === "Chat de suporte" ? "#ff6200" : "#333"}>Chat de suporte</ListContainerItemLabel>
                </ListContainerItem>
            </ListContainer>
            <ExitContainer onPress={handleSignOut}>
                <Icon name="exit-to-app" size={35} color="#f14927"/>
                <ExitContainerLabel>Sair do aplicativo</ExitContainerLabel>
            </ExitContainer>
        </SideBarContainer>
    );
}