import {useQuery} from "@tanstack/react-query";

import Api from "../services/api";

export function useGetDashboardData(){
    return useQuery({
        queryKey: ["getDashboardData"],
        queryFn: async () => {
            const data = await Api.get("/deliveryman/dashboard");

            return data.data;
        }
    });
}