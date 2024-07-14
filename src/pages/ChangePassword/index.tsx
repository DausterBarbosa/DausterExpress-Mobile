import FocusStatusBar from "../../components/FocusStatusBar";

import {Button, ButtonLabel, ChangePasswordPage, PasswordTextField} from "./styles";

export default function ChangePassword(){
    return (
        <ChangePasswordPage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <PasswordTextField placeholder="Nova senha"/>
            <PasswordTextField placeholder="Digite novamente"/>
            <Button>
                <ButtonLabel>SALVAR</ButtonLabel>
            </Button>
        </ChangePasswordPage>
    );
}