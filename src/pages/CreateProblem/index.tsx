import {useState} from "react";

import { ActivityIndicator, Alert } from "react-native";

import {useQueryClient} from "@tanstack/react-query";

import {useRoute} from "@react-navigation/native";

import FocusStatusBar from "../../components/FocusStatusBar";

import {useCreateProblem} from "../../controllers/ProblemController";

import {ProblemButton, ProblemButtonLabel, CreateProblemsPage, TextProblemField} from "./styles";

export default function CreateProblem(){
    const route = useRoute();

    const queryClient = useQueryClient();

    const {isPending, mutateAsync} = useCreateProblem();

    const [description, setDescription] = useState("");

    async function handleCreateProblem(){
        try {
            const problemData = await mutateAsync({
                id: route.params.id,
                description,
            });

            queryClient.setQueryData(["getDeliveries"], (oldData:any) => {
                const newProblems = oldData.data.map((encomenda:any) => {
                    if(encomenda.id === route.params.id){
                        return ({
                            ...encomenda,
                            status: "retirado",
                            problemas: [...encomenda.problemas, problemData.data.data],
                        });
                    }

                    return encomenda;
                });

                return {
                    ...oldData,
                    data: newProblems
                };
            });

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