import {createStackNavigator} from '@react-navigation/stack';

import HeaderBar from "../components/HeaderBar";

import Settings from '../pages/Settings';
import Profile from "../pages/Profile";
import ChangePassword from "../pages/ChangePassword";

const Stack = createStackNavigator();

export default function SettingsStackNavigation(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Configurações Page"
                component={Settings}
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
            <Stack.Screen
                name="Perfil"
                component={Profile}
                options={{
                    headerTitleAlign: "center"
                }}
            />
            <Stack.Screen
                name="Mudar senha"
                component={ChangePassword}
                options={{
                    headerTitleAlign: "center"
                }}
            />
        </Stack.Navigator>
    );
}