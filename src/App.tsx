import {StatusBar} from "react-native";

import Dashboard from "./pages/Dashboard";

export default function App(){
  return (
    <> 
      <StatusBar barStyle="light-content" backgroundColor="#4d148c"/>
      <Dashboard/>
    </>
  );
}