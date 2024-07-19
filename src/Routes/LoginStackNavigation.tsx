import {useContext} from "react";
import {ActivityIndicator, View} from "react-native";

import {createStackNavigator} from "@react-navigation/stack";

import Login from "../pages/Login";

import DrawerNavigation from "./DrawerNavigation";

import AuthContext from "../contexts/auth";

const Stack = createStackNavigator();

export default function LoginStackNavigation(){
    const {signed, loading} = useContext(AuthContext);

    if(loading){
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#666" />
            </View>
        );
    }

    return (
        <Stack.Navigator>
            {signed ? (
                <Stack.Screen
                    name="DrawerNavigation"
                    component={DrawerNavigation}
                    options={{
                        headerShown: false,
                    }}
                />
            ) : (
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
            )}
        </Stack.Navigator>
    );
}