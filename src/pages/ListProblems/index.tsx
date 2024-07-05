import {ProblemDescriptionData, ProblemDescriptionText, ListProblemsPage, ProblemDescriptionContainer} from "./styles";

export default function ListProblems(){
    return (
        <ListProblemsPage>
            <ProblemDescriptionContainer>
                <ProblemDescriptionText>
                    O caminhão de entrega caiu em uma emboscada, vários homems armados roubaram a carga.
                </ProblemDescriptionText>
                <ProblemDescriptionData>20/12/2024</ProblemDescriptionData>
            </ProblemDescriptionContainer>
        </ListProblemsPage>
    );
}