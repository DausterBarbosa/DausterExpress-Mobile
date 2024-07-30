import {useState, useRef, useContext} from "react";

import {useNavigation} from "@react-navigation/native";

import {Linking, Image, Alert, ActivityIndicator} from "react-native";

import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera";

import Icon from "react-native-vector-icons/MaterialIcons";

import {ActionsButton, ActionsButtonContainer, PermissionFailedInfoButtonLabel, PermissionFailedInfoButton, PermissionFailedInfoLabel, PhotoDeliveryButton, PermissionFailedContainer, PermissionFailedInfoContainer} from "./styles";

import {useSetDelivered} from "../../controllers/DeliveriesController";

import FocusStatusBar from "../../components/FocusStatusBar";

import DeliveryContext from "../../contexts/deliveries";

export default function PhotoDelivery(){
    const navigation = useNavigation();

    const {delivery, handleUpdateDelivery} = useContext(DeliveryContext);

    const [photoTaken, setPhotoTaken] = useState<null | string>(null);

    const {isPending, mutateAsync} = useSetDelivered();

    const camera = useRef<Camera>(null)

    const { hasPermission } = useCameraPermission();

    const device = useCameraDevice("back");

    function handlePermission(){
        Linking.openSettings();
    }

    async function handleTakePhoto(){
        const photo = await camera.current!.takePhoto();

        setPhotoTaken(photo.path);
    }

    function handleDiscartPhoto(){
        setPhotoTaken(null);
    }

    async function handleDelivered(){
        try {
            const data = await mutateAsync({
                encomenda: delivery.id,
                image_path: photoTaken || "",
            });

            handleUpdateDelivery("entregue");

            Alert.alert("Atenção", "Operação realizada com sucesso.", [
                {
                    text: "OK",
                    onPress: () => navigation.goBack(),
                }
            ]);
        } catch (error) {
            Alert.alert("Atenção", "Erro ao completar operação.");
        }
    }

    if (!hasPermission) return (
        <PermissionFailedContainer>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <PermissionFailedInfoContainer>
                <Icon name="no-photography" size={70} color="#4d148c"/>
                <PermissionFailedInfoLabel>Conceda a permissão para o uso{"\n"}da câmera para prosseguir.</PermissionFailedInfoLabel>
                <PermissionFailedInfoButton onPress={handlePermission}>
                    <PermissionFailedInfoButtonLabel>CONCEDER</PermissionFailedInfoButtonLabel>
                </PermissionFailedInfoButton>
            </PermissionFailedInfoContainer>
        </PermissionFailedContainer>
    );

    if (photoTaken !== null) return (
        <>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <Image style={{flex: 1}} source={{uri: "file://" + photoTaken}}/>
            <ActionsButtonContainer>
                <ActionsButton disabled={isPending} onPress={handleDiscartPhoto} backgroundColor="red" marginRight="80px">
                    <Icon name="close" size={35} color="#FFF"/>
                </ActionsButton>
                <ActionsButton disabled={isPending} backgroundColor="green" onPress={handleDelivered}>
                    {isPending ? <ActivityIndicator size="large" color="#FFF"/> : <Icon name="check" size={35} color="#FFF"/>}
                </ActionsButton>
            </ActionsButtonContainer>
         </>
    );

    return (
        <>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <Camera
                style={{flex: 1}}
                device={device}
                isActive={true}
                ref={camera}
                photo={true}
            />
            <PhotoDeliveryButton onPress={handleTakePhoto}>
                <Icon name="photo-camera" size={35} color="#FFF"/>
            </PhotoDeliveryButton>
        </>
  )
}