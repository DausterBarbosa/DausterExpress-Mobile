import {useContext, useState} from "react";
import {ActivityIndicator, Alert} from "react-native";

import FocusStatusBar from "../../components/FocusStatusBar";

import {LoginButton, LoginButtonLabel, LoginPage, Logo, LogoText, LoginTextField} from "./styles";

import AuthContext from "../../contexts/auth";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn, isPending} = useContext(AuthContext);

    function handleSign(){
        if(email.trim() === "" || password.trim() === ""){
            Alert.alert("Atenção", "Preencha todos os campos.");
        }
        else {
            signIn(email, password);
        }
    }

    return (
        <LoginPage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <Logo><LogoText color="#4d148c">Dauster</LogoText><LogoText color="#ff6200">Express</LogoText></Logo>
            <LoginTextField placeholder="Email" onChangeText={(e) => setEmail(e)}/>
            <LoginTextField secureTextEntry={true} placeholder="Senha" onChangeText={(e) => setPassword(e)}/>
            <LoginButton onPress={handleSign} disabled={isPending}>
                {isPending ? <ActivityIndicator size="large" color="#FFF"/> : <LoginButtonLabel>ENTRAR</LoginButtonLabel>}
            </LoginButton>
        </LoginPage>
    );
}

// onPress={() => navigation.navigate("DrawerNavigation")}