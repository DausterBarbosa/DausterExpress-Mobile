import FocusStatusBar from "../../components/FocusStatusBar";

import {NotificationsPage, NotificationContainer, NotificationContainerTitle, NotificationContainerLabel} from "./styles";

export default function Notifications(){
    return (
        <NotificationsPage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <NotificationContainer>
                <NotificationContainerTitle>
                    Nova mensagem
                </NotificationContainerTitle>
                <NotificationContainerLabel>
                    Vamos nessa porra.
                </NotificationContainerLabel>
            </NotificationContainer>
            <NotificationContainer>
                <NotificationContainerTitle>
                    Nova entrega
                </NotificationContainerTitle>
                <NotificationContainerLabel>
                    Verifique sua nova entrega.
                </NotificationContainerLabel>
            </NotificationContainer>
        </NotificationsPage>
    );
}