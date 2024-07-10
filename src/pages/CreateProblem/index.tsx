import FocusStatusBar from "../../components/FocusStatusBar";

import {ProblemButton, ProblemButtonLabel, CreateProblemsPage, TextProblemField} from "./styles";

export default function CreateProblem(){
    return (
        <CreateProblemsPage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <TextProblemField placeholder="Digite o problema" textAlignVertical="top" multiline/>
            <ProblemButton>
                <ProblemButtonLabel>ENVIAR</ProblemButtonLabel>
            </ProblemButton>
        </CreateProblemsPage>
    );
}