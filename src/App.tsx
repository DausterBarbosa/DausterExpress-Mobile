import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import LoginStackNavigation from "./Routes/LoginStackNavigation";

export default function App(){
  return (
    <NavigationContainer>
      <LoginStackNavigation/>
    </NavigationContainer>
  );
}