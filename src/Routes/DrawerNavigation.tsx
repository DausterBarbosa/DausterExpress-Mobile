import {createDrawerNavigator} from "@react-navigation/drawer";

import HeaderBar from "../components/HeaderBar";

import Dashboard from "../pages/Dashboard";
import Deliveries from "../pages/Deliveries";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Dashboard"
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
                component={Deliveries}
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