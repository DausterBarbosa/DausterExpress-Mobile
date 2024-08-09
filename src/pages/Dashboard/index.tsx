import {useContext, useEffect} from "react";

import messaging from '@react-native-firebase/messaging';

import {Alert, Linking, PermissionsAndroid, Text} from "react-native";

import FocusStatusBar from "../../components/FocusStatusBar";

import {StatusContainer, StatusBoxContainer, StatusBox, DashboardPage, WelcomeContainer, WelcomeLabelContainer} from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";

import AuthContext from "../../contexts/auth";

import {useGetDashboardData} from "../../controllers/DashboardController";
import {useSetFcmToken} from "../../controllers/FcmTokenController";

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dashboard(){
    const {user} = useContext(AuthContext);

    const {data, isLoading} = useGetDashboardData();

    const {mutateAsync} = useSetFcmToken();

    useEffect(() => {
        async function handleNotificationPermission(){
            try {
                const storedToken = await AsyncStorage.getItem("@DausterExpressFCMToken");

                if(!storedToken){
                    const authorizationStatus = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
                
                    if(authorizationStatus === PermissionsAndroid.RESULTS.GRANTED){
                        await messaging().registerDeviceForRemoteMessages();

                        const token = await messaging().getToken();

                        if(token){
                            await AsyncStorage.setItem("@DausterExpressFCMToken", token);

                            await mutateAsync(token);
                        }
                    }
                    else {
                        Alert.alert("Atenção", "É de extrema importância que as notificações estejam ativadas.", [
                            {
                                text: "OK",
                                onPress: () => Linking.openSettings(),
                            }
                        ]);
                    }
                }
            } catch (error) {
                console.log(error);
            }    
        }

        handleNotificationPermission();
    }, []);

    return (
        <DashboardPage>
            <FocusStatusBar barStyle="light-content" backgroundColor="#4d148c"/>
            <WelcomeContainer>
                <WelcomeLabelContainer fontSize="25px" fontWeight="bold">Olá, {user !== null && user.nome + " " + user.sobrenome}</WelcomeLabelContainer>
                <WelcomeLabelContainer fontSize="17px" fontWeight="300">Bem vindo ao DausterExpress logística</WelcomeLabelContainer>
            </WelcomeContainer>
            <StatusContainer>
                <Text style={{fontSize: 20, fontWeight: "bold", color: "#494E5D"}}>Status das Entregas</Text>
                <StatusBox backgroundColor="#b491e4">
                    <Text style={{fontSize: 45, fontWeight: "bold", color: "#FFF"}}>{data !== undefined ? data.data.pendentes : "0"}</Text>
                    <StatusBoxContainer>
                        <Icon name="pending" size={50} color="#FFF"/>
                        <Text  style={{fontSize: 15, color: "#FFF"}}>Entregas pendentes</Text>
                    </StatusBoxContainer>
                </StatusBox>
                <StatusBox backgroundColor="#fa9657">
                    <Text style={{fontSize: 45, fontWeight: "bold", color: "#FFF"}}>{data !== undefined ? data.data.retiradas : "0"}</Text>
                    <StatusBoxContainer>
                        <Icon name="arrow-circle-right" size={50} color="#FFF"/>
                        <Text  style={{fontSize: 15, color: "#FFF"}}>Entregas em trânsito</Text>
                    </StatusBoxContainer>
                </StatusBox>
                <StatusBox  backgroundColor="#87d6b7">
                    <Text style={{fontSize: 45, fontWeight: "bold", color: "#FFF"}}>{data !== undefined ? data.data.entregues : "0"}</Text>
                    <StatusBoxContainer>
                        <Icon name="check-circle" size={50} color="#FFF"/>
                        <Text style={{fontSize: 15, color: "#FFF"}}>Entregas realizadas</Text>
                    </StatusBoxContainer>
                </StatusBox>
                <StatusBox  backgroundColor="#dec560">
                    <Text style={{fontSize: 45, fontWeight: "bold", color: "#FFF"}}>{data !== undefined ? data.data.problemas : "0"}</Text>
                    <StatusBoxContainer>
                        <Icon name="error" size={50} color="#FFF"/>
                        <Text style={{fontSize: 15, color: "#FFF"}}>Entregas com problemas</Text>
                    </StatusBoxContainer>
                </StatusBox>
                <StatusBox  backgroundColor="#e6a396" marginBottom="35px">
                    <Text style={{fontSize: 45, fontWeight: "bold", color: "#FFF"}}>{data !== undefined ? data.data.canceladas : "0"}</Text>
                    <StatusBoxContainer>
                        <Icon name="cancel" size={50} color="#FFF"/>
                        <Text style={{fontSize: 15, color: "#FFF"}}>Entregas canceladas</Text>
                    </StatusBoxContainer>
                </StatusBox>
            </StatusContainer>
        </DashboardPage>
    );
}