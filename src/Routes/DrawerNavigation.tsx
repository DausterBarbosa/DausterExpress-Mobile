import {createDrawerNavigator} from "@react-navigation/drawer";

import HeaderBar from "../components/HeaderBar";
import SideBar from "../components/SideBar";

import Dashboard from "../pages/Dashboard";
import ChangePassword from "../pages/ChangePassword";
import SupportChat from "../pages/SupportChat";

import DeliveriesStackNavigation from "./DeliveriesStackNavigation";
import SettingsStackNavigation from "./SettingsStackNavigation";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(){
    return (
        <Drawer.Navigator
            drawerContent={() => <SideBar/>}
        >
            <Drawer.Screen
                name="Início"
                component={Dashboard}
                options={{
                    header: () => <HeaderBar
                        colorMenuIcon="#FFF"
                        colorNotificationIcon="#FFF"
                        colorBackgroundHeader="#4d148c"
                        colorFirstName="#FFF"
                        colorSecondName="#ff6200"
                    />
                }}
            />
            <Drawer.Screen
                name="Entregas"
                component={DeliveriesStackNavigation}
                options={{
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Configurações"
                component={SettingsStackNavigation}
                options={{
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Chat de suporte"
                component={SupportChat}
                options={{
                    header: () => <HeaderBar
                        colorMenuIcon="#4d148c"
                        colorNotificationIcon="#4d148c"
                        colorBackgroundHeader="#FFF"
                        colorFirstName="#4d148c"
                        colorSecondName="#ff6200"
                    />
                }}
            />
        </Drawer.Navigator>
    );
}