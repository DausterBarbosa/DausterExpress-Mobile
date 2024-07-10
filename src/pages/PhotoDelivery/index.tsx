import {useState, useRef} from "react";

import {Linking, Image} from "react-native";

import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera";

import Icon from "react-native-vector-icons/MaterialIcons";

import {ActionsButton, ActionsButtonContainer, PermissionFailedInfoButtonLabel, PermissionFailedInfoButton, PermissionFailedInfoLabel, PhotoDeliveryButton, PermissionFailedContainer, PermissionFailedInfoContainer} from "./styles";

import FocusStatusBar from "../../components/FocusStatusBar";

export default function PhotoDelivery(){
    const [photoTaken, setPhotoTaken] = useState<null | string>(null);

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
                <ActionsButton onPress={handleDiscartPhoto} backgroundColor="red" marginRight="80px">
                    <Icon name="close" size={35} color="#FFF"/>
                </ActionsButton>
                <ActionsButton backgroundColor="green">
                    <Icon name="check" size={35} color="#FFF"/>
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