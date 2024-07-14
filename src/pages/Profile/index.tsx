import {launchCamera} from "react-native-image-picker";

import Icon from "react-native-vector-icons/MaterialIcons";

import FocusStatusBar from "../../components/FocusStatusBar";

import {ChangeProfilePhotoButton, InfoContainerDescription, ProfilePage, ProfilePhotoContainer, ProfilePhoto, ProfilePhotoLabel, InfoContainer} from "./styles";

export default function Profile(){
    async function handleImage(){
        const result = await launchCamera({
            mediaType: "photo",
        });

        console.log(result);
    }

    return (
        <ProfilePage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <ProfilePhotoContainer>
                <ProfilePhoto>
                    <ChangeProfilePhotoButton onPress={handleImage}>
                        <Icon name="photo-camera" size={30} color="#FFF"/>
                    </ChangeProfilePhotoButton>
                </ProfilePhoto>
                <ProfilePhotoLabel>Makarov Tokarev</ProfilePhotoLabel>
            </ProfilePhotoContainer>
            <InfoContainer>
                <Icon name="call" size={35} color="#ff6200"/>
                <InfoContainerDescription>(88)99471-0221</InfoContainerDescription>
            </InfoContainer>
            <InfoContainer>
                <Icon name="mail" size={35} color="#ff6200"/>
                <InfoContainerDescription>dausterbarbosa12@gmail.com</InfoContainerDescription>
            </InfoContainer>
            <InfoContainer>
                <Icon name="apartment" size={35} color="#ff6200"/>
                <InfoContainerDescription>Viçosa do Ceará / 62300-000</InfoContainerDescription>
            </InfoContainer>
            <InfoContainer>
                <Icon name="home" size={35} color="#ff6200"/>
                <InfoContainerDescription>Rua Lamartine Nogueira, 1700</InfoContainerDescription>
            </InfoContainer>
        </ProfilePage>
    );
}