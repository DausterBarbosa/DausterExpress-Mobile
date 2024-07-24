import {FlatList, View, Text} from "react-native";

import {useRoute} from "@react-navigation/native";

import Icon from "react-native-vector-icons/MaterialIcons";

import FocusStatusBar from "../../components/FocusStatusBar";

import {ProblemDescriptionData, ProblemDescriptionText, ListProblemsPage, ProblemDescriptionContainer} from "./styles";

export default function ListProblems(){
    const route = useRoute();

    function formattedDate(dateString:string){
        return new Date(dateString).toLocaleDateString("pt-BR", {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    }

    return (
        <ListProblemsPage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            {route.params.length === 0 ? (
                 <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                    <Icon name="done" size={100} color="#666"/>
                    <Text style={{fontSize: 20, color: "#666"}}>Sem problemas por aqui.</Text>
                </View>
            ) : (
                <FlatList
                    contentContainerStyle={{padding: 10, backgroundColor: "#FFF"}}
                    data={route.params}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <ProblemDescriptionContainer key={item.id}>
                            <ProblemDescriptionText>
                                {item.descricao}
                            </ProblemDescriptionText>
                            <ProblemDescriptionData>{formattedDate(item.created_at)}</ProblemDescriptionData>
                        </ProblemDescriptionContainer>
                    )}
                />
            )}
        </ListProblemsPage>
    );
}