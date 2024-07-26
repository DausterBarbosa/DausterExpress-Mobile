import {createContext, ReactNode, useState} from "react";

import {useQueryClient} from "@tanstack/react-query";

interface HandleDeliveiesProps{
    children: ReactNode;
}

interface HandleDeliveriesData{
    handleSetDelivery(delivery:any, queryParams:any):void;
    handleUpdateDelivery(problem:any, status:string):void;
    delivery:any;
}

interface DeliveryProps{
    id?: string;
    status: string;
    problemas: any[];
}

const DeliveriesContext = createContext<HandleDeliveriesData>({} as HandleDeliveriesData);

export const DeliveriesProvider:React.FC<HandleDeliveiesProps> = ({children}) => {
    const queryClient = useQueryClient();

    const [delivery, setDelivery] = useState<DeliveryProps>();

    const [queryParams, setQueryParams] = useState();

    function handleSetDelivery(deliveryData:any, queryParams:any){
        setDelivery(deliveryData);
        setQueryParams(queryParams);
    }

    function handleUpdateDelivery(problem:any, status:string){
        setDelivery({...delivery, status, problemas: [...delivery!.problemas, problem]});

        queryClient.setQueryData(["getDeliveries", queryParams], (oldData:any) => {
            const updatedData = oldData.data.map((item:any) => {
                if(item.id === delivery!.id){
                    return {
                        ...item,
                        status: "problema",
                        problemas: [...item.problemas, problem]
                    };
                }

                return item
            });

            return {
                ...oldData,
                data: updatedData,
            };
        });
    }

    return (
        <DeliveriesContext.Provider value={{handleSetDelivery, delivery, handleUpdateDelivery}}>
            {children}
        </DeliveriesContext.Provider>
    );
}

export default DeliveriesContext;