import {useMutation} from "@tanstack/react-query";

import Api from "../services/api";

export function useSetProfilePhoto(){
    return useMutation({
        mutationKey: ["setProfilePhoto"],
        mutationFn: async (urlImage:string) => {
            const data = await Api.post("/deliveryman/profilephoto", {
                url_image_profile: urlImage,
            });

            return data;
        }
    });
}