/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import messaging from '@react-native-firebase/messaging';

import {getQueryClient} from "./src/singleton/queryClientSingleton";

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log("asdf");
    //Quando app está em background
    const queryClient = getQueryClient();

    queryClient.invalidateQueries({queryKey: ['getDeliveries']});
    queryClient.invalidateQueries({queryKey: ['getDashboardData']});
});

AppRegistry.registerComponent(appName, () => App);
