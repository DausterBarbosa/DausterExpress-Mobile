import {useMutation} from "@tanstack/react-query";

import Api from "../services/api";

export function useUpdatePassword(){
    return useMutation({
        mutationKey: ["updatePassword"],
        mutationFn: async (newPassword:string) => {
            const data = await Api.post("/deliveryman/updatepassword", {
                newPassword,
            });

            return data;
        }
    });
}