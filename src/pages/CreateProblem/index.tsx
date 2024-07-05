import {ProblemButton, ProblemButtonLabel, CreateProblemsPage, TextProblemField} from "./styles";

export default function CreateProblem(){
    return (
        <CreateProblemsPage>
            <TextProblemField placeholder="Digite o problema" textAlignVertical="top" multiline/>
            <ProblemButton>
                <ProblemButtonLabel>ENVIAR</ProblemButtonLabel>
            </ProblemButton>
        </CreateProblemsPage>
    );
}