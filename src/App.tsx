import "react-native-gesture-handler";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import { NavigationContainer } from "@react-navigation/native";

import LoginStackNavigation from "./Routes/LoginStackNavigation";

import {MenuProvider} from "react-native-popup-menu";

import {AuthProvider} from "./contexts/auth";
import {DeliveriesProvider} from "./contexts/deliveries";

const queryClient = new QueryClient();

export default function App(){
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthProvider>
          <DeliveriesProvider>
            <MenuProvider>
              <LoginStackNavigation/>
            </MenuProvider>
          </DeliveriesProvider>
        </AuthProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}