import {createStackNavigator} from '@react-navigation/stack';

import Login from "../pages/Login";

import DrawerNavigation from './DrawerNavigation';

const Stack = createStackNavigator();

export default function LoginStackNavigation(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="DrawerNavigation"
                component={DrawerNavigation}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}