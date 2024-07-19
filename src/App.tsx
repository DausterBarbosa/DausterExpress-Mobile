import "react-native-gesture-handler";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import { NavigationContainer } from "@react-navigation/native";

import LoginStackNavigation from "./Routes/LoginStackNavigation";

import {AuthProvider} from "./contexts/auth";

const queryClient = new QueryClient();

export default function App(){
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthProvider>
          <LoginStackNavigation/>
        </AuthProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}