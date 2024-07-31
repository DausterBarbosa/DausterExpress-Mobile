import { useContext, useState } from "react";

import {ActivityIndicator, Alert} from "react-native";

import {launchCamera} from "react-native-image-picker";

import Icon from "react-native-vector-icons/MaterialIcons";

import FocusStatusBar from "../../components/FocusStatusBar";

import {ChangeProfilePhotoButton, InfoContainerDescription, ProfilePage, ProfilePhotoContainer, ProfilePhoto, ProfilePhotoEmpty, ProfilePhotoLabel, InfoContainer} from "./styles";

import {useSetProfilePhoto} from "../../controllers/ProfileController";

import AuthContext from "../../contexts/auth";

import uploadImage from "../../services/storage";

export default function Profile(){
    const [loading, setLoading] = useState(false);

    const {user} = useContext(AuthContext);

    const {mutateAsync} = useSetProfilePhoto();

    async function handleImage(){
        const result = await launchCamera({
            mediaType: "photo",
            cameraType: "front",
        });

        if(result.assets){
            const path = result.assets[0].originalPath;

            setLoading(true);

            try {
                const url = await uploadImage(path!, "delivered/");

                await mutateAsync(url);

                Alert.alert("Atenção", "Operação realizada com sucesso.");
            } catch (error) {
                Alert.alert("Atenção", "Erro ao completar operação.");
            }

            setLoading(false);
        }
    }

    return (
        <ProfilePage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <ProfilePhotoContainer>
                {user?.url_image_profile === null ? (
                    <ProfilePhotoEmpty>
                        <Icon name="person" size={70} color="#333"/>
                        <ChangeProfilePhotoButton onPress={handleImage} disabled={loading}>
                            {loading ? <ActivityIndicator size="small" color="#FFF"/> : <Icon name="photo-camera" size={30} color="#FFF"/>}
                        </ChangeProfilePhotoButton>
                    </ProfilePhotoEmpty>
                ) : (
                    <ProfilePhoto source={{uri: user?.url_image_profile}} imageStyle={{borderRadius: 100}} resizeMode="cover">
                        <ChangeProfilePhotoButton onPress={handleImage} disabled={loading}>
                            {loading ? <ActivityIndicator size="small" color="#FFF"/> : <Icon name="photo-camera" size={30} color="#FFF"/>}
                        </ChangeProfilePhotoButton>
                    </ProfilePhoto>
                )}
                <ProfilePhotoLabel>{user?.nome + " " + user?.sobrenome}</ProfilePhotoLabel>
            </ProfilePhotoContainer>
            <InfoContainer>
                <Icon name="call" size={35} color="#ff6200"/>
                <InfoContainerDescription>{user?.telefone}</InfoContainerDescription>
            </InfoContainer>
            <InfoContainer>
                <Icon name="mail" size={35} color="#ff6200"/>
                <InfoContainerDescription>{user?.email}</InfoContainerDescription>
            </InfoContainer>
            <InfoContainer>
                <Icon name="apartment" size={35} color="#ff6200"/>
                <InfoContainerDescription>{user?.cidade + " / " + user?.cep}</InfoContainerDescription>
            </InfoContainer>
            <InfoContainer>
                <Icon name="home" size={35} color="#ff6200"/>
                <InfoContainerDescription>{user?.endereco + ", " + user?.numero}</InfoContainerDescription>
            </InfoContainer>
        </ProfilePage>
    );
}