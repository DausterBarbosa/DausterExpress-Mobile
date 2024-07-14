import {Text} from "react-native";

import {useNavigation} from "@react-navigation/native";

import FocusStatusBar from "../../components/FocusStatusBar";

import Icon from "react-native-vector-icons/MaterialIcons";

import {SettingsPage, SettingsPageOptionContainer, SettingsPageInfoContainer, SettingsPageOptionContainerTitle, SettingsPageOptionContainerLabel} from "./styles";

export default function Settings(){
    const navigation = useNavigation();

    return (
        <SettingsPage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <Text style={{fontSize: 25, fontWeight: "bold", color: "#494E5D"}}>Configurações</Text>
            <SettingsPageOptionContainer onPress={() => navigation.navigate("Perfil")}>
                <Icon name="account-circle" size={35} color="#ff6200"/>
                <SettingsPageInfoContainer>
                    <SettingsPageOptionContainerTitle>Suas informações</SettingsPageOptionContainerTitle>
                    <SettingsPageOptionContainerLabel>Foto, email, telefone e etc</SettingsPageOptionContainerLabel>
                </SettingsPageInfoContainer>
            </SettingsPageOptionContainer>
            <SettingsPageOptionContainer onPress={() => navigation.navigate("Mudar senha")}>
                <Icon name="lock" size={35} color="#ff6200"/>
                <SettingsPageInfoContainer>
                    <SettingsPageOptionContainerTitle>Senha de acesso</SettingsPageOptionContainerTitle>
                    <SettingsPageOptionContainerLabel>Altere sua senha</SettingsPageOptionContainerLabel>
                </SettingsPageInfoContainer>
            </SettingsPageOptionContainer>
        </SettingsPage>
    );
}