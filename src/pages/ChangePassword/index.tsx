import {useState} from "react";

import { ActivityIndicator, Alert } from "react-native";

import FocusStatusBar from "../../components/FocusStatusBar";

import {ChangePasswordPage, PasswordTextField, PasswordButton, PasswordButtonLabel} from "./styles";

import {useUpdatePassword} from "../../controllers/PasswordController";

export default function ChangePassword(){
    const {mutateAsync, isPending} = useUpdatePassword();

    const [firstPasswordField, setFirtPasswordField] = useState("");
    const [secondPasswordField, setSecondPasswordField] = useState("");

    async function handleUpdatePassword(){
        if(firstPasswordField.trim() === "" || secondPasswordField.trim() === "" || firstPasswordField !== secondPasswordField){
            Alert.alert("Atenção", "As senhas não coincidem.");
        }
        else {
            try {
                await mutateAsync(firstPasswordField);

                Alert.alert("Atenção", "Operação realizada com sucesso.");

                setFirtPasswordField("");
                setSecondPasswordField("");
            } catch (error) {
                Alert.alert("Atenção", "Erro ao realizar a operação.");
            }
        }
    }

    return (
        <ChangePasswordPage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <PasswordTextField secureTextEntry={true} placeholder="Nova senha" value={firstPasswordField} onChangeText={(e) => setFirtPasswordField(e)}/>
            <PasswordTextField secureTextEntry={true} placeholder="Digite novamente" value={secondPasswordField} onChangeText={(e) => setSecondPasswordField(e)}/>
            <PasswordButton onPress={handleUpdatePassword} disabled={isPending}>
                {isPending ? <ActivityIndicator size="large" color="#FFF"/> : <PasswordButtonLabel>ENTRAR</PasswordButtonLabel>}
            </PasswordButton>
        </ChangePasswordPage>
    );
}