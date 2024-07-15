import {useNavigation} from "@react-navigation/native";

import FocusStatusBar from "../../components/FocusStatusBar";

import {LoginButton, LoginButtonLabel, LoginPage, Logo, LogoText, LoginTextField} from "./styles";

export default function Login(){
    const navigation = useNavigation();

    return (
        <LoginPage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <Logo><LogoText color="#4d148c">Dauster</LogoText><LogoText color="#ff6200">Express</LogoText></Logo>
            <LoginTextField placeholder="Email"/>
            <LoginTextField placeholder="Senha"/>
            <LoginButton onPress={() => navigation.navigate("DrawerNavigation")}>
                <LoginButtonLabel>ENTRAR</LoginButtonLabel>
            </LoginButton>
        </LoginPage>
    );
}