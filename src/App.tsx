import {StatusBar} from "react-native";

import CreateProblem from "./pages/CreateProblem";

export default function App(){
  return (
    <> 
      <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>
      <CreateProblem/>
    </>
  );
}