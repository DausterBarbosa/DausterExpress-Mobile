import {useMutation} from "@tanstack/react-query";

import Api from "../services/api";

import UserCredentialsData from "../types/UserCredentialsData";

export function useGetAuthorization(){
    return useMutation({
        mutationKey: ["getAuthorization"],
        mutationFn: async (userData:UserCredentialsData) => {
            const data = await Api.post("/password/login", {
                email: userData.email,
                password: userData.password,
            });

            return data;
        }
    });
}