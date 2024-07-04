import {StatusBar} from "react-native";

import Deliveries from "./pages/Deliveries";

export default function App(){
  return (
    <> 
      <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>
      <Deliveries/>
    </>
  );
}