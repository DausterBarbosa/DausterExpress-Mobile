import {createStackNavigator} from '@react-navigation/stack';

import HeaderBar from "../components/HeaderBar";

import Deliveries from "../pages/Deliveries";
import DeliveriesInfo from "../pages/DeliveriesInfo";
import CreateProblem from "../pages/CreateProblem";
import ListProblems from "../pages/ListProblems";
import PhotoDelivery from "../pages/PhotoDelivery";

const Stack = createStackNavigator();

export default function StackNavigation(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Entregas painel"
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
            <Stack.Screen
                name="Detalhes"
                component={DeliveriesInfo}
                options={{
                    headerTitleAlign: "center"
                }}
            />
            <Stack.Screen
                name="Informar problema"
                component={CreateProblem}
                options={{
                    headerTitleAlign: "center"
                }}
            />
            <Stack.Screen
                name="Lista de problemas"
                component={ListProblems}
                options={{
                    headerTitleAlign: "center"
                }}
            />
            <Stack.Screen
                name="Tirar foto"
                component={PhotoDelivery}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}