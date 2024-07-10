import {createDrawerNavigator} from "@react-navigation/drawer";

import HeaderBar from "../components/HeaderBar";

import Dashboard from "../pages/Dashboard";

import StackNavigation from "./StackNavigation";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(){
    return (
        <Drawer.Navigator>
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
                component={StackNavigation}
                options={{
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
    );
}