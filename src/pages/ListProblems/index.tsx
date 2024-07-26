import {useContext} from "react";

import {FlatList, View, Text} from "react-native";

import {useRoute} from "@react-navigation/native";

import Icon from "react-native-vector-icons/MaterialIcons";

import FocusStatusBar from "../../components/FocusStatusBar";

import FormattedData from "../../util/FormattedDate";

import {ProblemDescriptionData, ProblemDescriptionText, ListProblemsPage, ProblemDescriptionContainer} from "./styles";

import DeliveryContext from "../../contexts/deliveries";

export default function ListProblems(){
    const {delivery} = useContext(DeliveryContext);

    return (
        <ListProblemsPage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            {delivery!.problemas.length === 0 ? (
                 <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                    <Icon name="done" size={100} color="#666"/>
                    <Text style={{fontSize: 20, color: "#666"}}>Sem problemas por aqui.</Text>
                </View>
            ) : (
                <FlatList
                    contentContainerStyle={{padding: 10, backgroundColor: "#FFF"}}
                    data={delivery.problemas}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <ProblemDescriptionContainer key={item.id}>
                            <ProblemDescriptionText>
                                {item.descricao}
                            </ProblemDescriptionText>
                            <ProblemDescriptionData>{FormattedData(item.created_at)}</ProblemDescriptionData>
                        </ProblemDescriptionContainer>
                    )}
                />
            )}
        </ListProblemsPage>
    );
}