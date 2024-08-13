import {useEffect} from "react";

import {createDrawerNavigator} from "@react-navigation/drawer";

import { useQueryClient } from '@tanstack/react-query';

import HeaderBar from "../components/HeaderBar";
import SideBar from "../components/SideBar";

import Dashboard from "../pages/Dashboard";
import SupportChat from "../pages/SupportChat";

import DeliveriesStackNavigation from "./DeliveriesStackNavigation";
import SettingsStackNavigation from "./SettingsStackNavigation";

import messaging from '@react-native-firebase/messaging';

import {useNavigation} from "@react-navigation/native";

import notifee from "@notifee/react-native";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(){
    const queryClient = useQueryClient();

    const navigation = useNavigation();

    useEffect(() => {
        async function handleNotifications(){
            const channelId = await notifee.createChannel({
                id: 'default',
                name: 'Default Channel',
                sound: 'default',
                vibration: true,
              });
            
            const unsubscribe = messaging().onMessage(async remoteMessage => {
                if(remoteMessage.data){
                    queryClient.invalidateQueries({queryKey: ['getDeliveries']});
                    queryClient.invalidateQueries({queryKey: ['getDashboardData']});
                    notifee.displayNotification({
                        title: remoteMessage.notification?.title,
                        body: remoteMessage.notification?.body,
                        data: {
                            screenName: remoteMessage.data.screenName
                        },
                        android:{
                            channelId,
                            sound: "default",
                        }
                    });
                }
            });

            notifee.onForegroundEvent(({type, detail}) => {
                if(type === 1){
                    navigation.navigate(detail.notification?.data?.screenName);
                }
            });

            messaging().onNotificationOpenedApp(async remoteMessage => {
                if(remoteMessage){
                    navigation.navigate(remoteMessage.data.screenName);
                }
            });

            messaging().setBackgroundMessageHandler(async remoteMessage => {
                queryClient.invalidateQueries({queryKey: ['getDeliveries']});
                queryClient.invalidateQueries({queryKey: ['getDashboardData']});
            });
        
            messaging().getInitialNotification().then(remoteMessage => {
                if(remoteMessage){
                    navigation.navigate(remoteMessage.data.screenName);
                }
            });
        
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