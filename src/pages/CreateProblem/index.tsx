import {useState, useContext} from "react";

import { ActivityIndicator, Alert } from "react-native";

import FocusStatusBar from "../../components/FocusStatusBar";

import {useCreateProblem} from "../../controllers/ProblemController";

import {ProblemButton, ProblemButtonLabel, CreateProblemsPage, TextProblemField} from "./styles";

import DeliveryContext from "../../contexts/deliveries";

export default function CreateProblem(){
    const {isPending, mutateAsync} = useCreateProblem();

    const [description, setDescription] = useState("");

    const {delivery, handleUpdateDelivery} = useContext(DeliveryContext);

    async function handleCreateProblem(){
        try {
            const problemData = await mutateAsync({
                id: delivery.id,
                description,
            });

            handleUpdateDelivery("problema", problemData.data.data);

            setDescription("");

            Alert.alert("Atenção", "Problema cadastrado com sucesso.");
        } catch (error) {
            Alert.alert("Atenção", "Erro ao salvar o problema.");
        }
    }

    return (
        <CreateProblemsPage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <TextProblemField value={description} onChangeText={(e) => setDescription(e)} placeholder="Digite o problema" textAlignVertical="top" multiline/>
            <ProblemButton onPress={handleCreateProblem} disabled={isPending || description.trim() === ""}>
                {isPending ? <ActivityIndicator size="large" color="#FFF"/> : <ProblemButtonLabel>ENTRAR</ProblemButtonLabel>}
            </ProblemButton>
        </CreateProblemsPage>
    );
}