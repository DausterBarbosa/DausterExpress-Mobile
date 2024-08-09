import {useMutation} from "@tanstack/react-query";

import Api from "../services/api";

export function useSetFcmToken(){
    return useMutation({
        mutationKey: ["setFcmToken"],
        mutationFn: async (token:string) => {
            const data = await Api.post("/deliveryman/fcm-token", {
                token,
            });

            return data;
        }
    });
}