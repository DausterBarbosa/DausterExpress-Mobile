import storage from "@react-native-firebase/storage";

import uuid from "react-native-uuid";

export default async function uploadImage(filePath:string, folder:string){
    const reference = storage().ref(`${folder}/${uuid.v4()}.jpg`);

    await reference.putFile(filePath);

    return reference.getDownloadURL();
}