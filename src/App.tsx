import {StatusBar} from "react-native";

import PhotoDelivery from "./pages/PhotoDelivery";

export default function App(){
  return (
    <> 
      <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>
      <PhotoDelivery/>
    </>
  );
}