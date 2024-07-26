import {useQuery} from "@tanstack/react-query";

import Api from "../services/api";

interface OrderQueryProps {
    page: number;
    status: string;
    encomenda: string;
}

export function useGetDeliveries(query:OrderQueryProps){
    return useQuery({
        queryKey: ["getDeliveries", query],
        queryFn: async () => {
            const data = await Api.get("/deliveryman/order", {
                params: {
                    page: query.page + 1,
                    take: 5,
                    status: query.status,
                    encomenda: query.encomenda
                }
            });

            return data.data;
        }
    });
}