import {useQuery} from "@tanstack/react-query";

import Api from "../services/api";

export function useGetDeliveries(){
    return useQuery({
        queryKey: ["getDeliveries"],
        queryFn: async () => {
            const data = await Api.get("/deliveryman/order");

            return data.data;
        }
    });
}