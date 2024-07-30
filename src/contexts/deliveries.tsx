import {createContext, ReactNode, useState} from "react";

import {useQueryClient} from "@tanstack/react-query";

interface HandleDeliveiesProps{
    children: ReactNode;
}

interface HandleDeliveriesData{
    handleSetDelivery(delivery:any, queryParams:any):void;
    handleUpdateDelivery(status:string, problem?:any):void;
    delivery:any;
}

interface DeliveryProps{
    id?: string;
    status: string;
    problemas: any[];
    data_entrega: Date | null;
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

    function handleUpdateDelivery(status:string, problem?:any){
        if(status === "problema"){
            setDelivery({...delivery, status, problemas: [...delivery!.problemas, problem], data_entrega: null});
        }
        else if(status === "entregue"){
            setDelivery({...delivery, status, problemas: [...delivery!.problemas], data_entrega: new Date()});
        }

        queryClient.setQueryData(["getDeliveries", queryParams], (oldData:any) => {
            const updatedData = oldData.data.map((item:any) => {
                if(item.id === delivery!.id){
                    if(status === "problema"){
                        return {
                            ...item,
                            status: "problema",
                            problemas: [...item.problemas, problem]
                        };
                    }
                    else if(status === "entregue"){
                        return {
                            ...item,
                            status: "entregue",
                            data_entrega: new Date(),
                            problemas: [...item.problemas]
                        };
                    }
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