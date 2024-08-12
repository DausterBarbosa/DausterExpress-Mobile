import {useEffect} from "react";

import {createDrawerNavigator} from "@react-navigation/drawer";

import HeaderBar from "../components/HeaderBar";
import SideBar from "../components/SideBar";

import Dashboard from "../pages/Dashboard";
import SupportChat from "../pages/SupportChat";

import DeliveriesStackNavigation from "./DeliveriesStackNavigation";
import SettingsStackNavigation from "./SettingsStackNavigation";

import messaging from '@react-native-firebase/messaging';

import notifee from "@notifee/react-native";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(){
    useEffect(() => {
        async function handleNotifications(){
            const channelId = await notifee.createChannel({
                id: 'default',
                name: 'Default Channel',
                sound: 'default',
                vibration: true,
              });

            const unsubscribe = messaging().onMessage(async remoteMessage => {
                notifee.displayNotification({title: "asdf", body: "asdf", android:{channelId}});
            });
        
            // messaging().onNotificationOpenedApp(async remoteMessage => {
            //   console.log("App fodendo");
            // });
        
            // messaging().getInitialNotification().then(remoteMessage => {
            //   console.log("App fodendo");
            // });
        
            return unsubscribe;
        }

        handleNotifications();
    }, []);

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