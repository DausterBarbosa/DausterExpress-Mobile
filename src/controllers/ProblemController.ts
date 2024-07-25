import {useMutation} from "@tanstack/react-query";

import Api from "../services/api";

import ProblemData from "../types/ProblemData";

export function useCreateProblem(){
    return useMutation({
        mutationKey: ["createProblem"],
        mutationFn: async (problemData:ProblemData) => {
            const data = await Api.post("/deliveryman/problem", {
                id: problemData.id,
                descricao: problemData.description,
            });

            return data;
        }
    });
}