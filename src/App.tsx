import {StatusBar} from "react-native";

import DeliveriesInfo from "./pages/DeliveriesInfo";

export default function App(){
  return (
    <> 
      <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>
      <DeliveriesInfo/>
    </>
  );
}