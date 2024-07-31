import {useMutation, useQuery} from "@tanstack/react-query";

import Api from "../services/api";

import uploadImage from "../services/storage";

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
                    take: 10,
                    status: query.status,
                    encomenda: query.encomenda
                }
            });

            return data.data;
        }
    });
}

interface DeliveredProps{
    encomenda: string;
    image_path: string;
}

export function useSetDelivered(){
    return useMutation({
        mutationKey: ["setDelivered"],
        mutationFn: async (dataDelivered:DeliveredProps) => {
            const url = await uploadImage(dataDelivered.image_path, "delivered/");

            const data = await Api.post("/deliveryman/delivered", {
                encomenda: dataDelivered.encomenda,
                url_image: url,
            });

            return data;
        }
    });
}