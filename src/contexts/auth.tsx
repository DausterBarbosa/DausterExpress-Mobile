import {ReactNode, createContext, useState, useEffect} from "react";
import {Alert} from "react-native";

import AsyncStorage from  "@react-native-async-storage/async-storage";

import {useGetAuthorization} from "../controllers/LoginController";

import Api from "../services/api";

interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: boolean;
    isPending: boolean;
    signIn(email:string, password:string):Promise<void>;
    signOut(): void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider:React.FC<AuthProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const {mutateAsync, isPending} = useGetAuthorization();

    const [user, setUser] = useState<object | null>(null);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await AsyncStorage.getItem("@DausterExpressAuth:user");
            const storagedToken = await AsyncStorage.getItem("@DausterExpressAuth:token");
    
            if (storagedUser && storagedToken){
                setUser(JSON.parse(storagedUser));
            }

            setLoading(false);

            Api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
        }
    
        loadStorageData();
    });

    async function signIn(email:string, password:string){
        try {
            const data = await mutateAsync({email, password});

            setUser(data.data.data.user);

            Api.defaults.headers.Authorization = `Baerer ${data.data.data.token}`;

            await AsyncStorage.setItem("@DausterExpressAuth:user", JSON.stringify(data.data.data.user));
            await AsyncStorage.setItem("@DausterExpressAuth:token", data.data.data.token);
        } catch (error) {
            Alert.alert("Atenção", "Credenciais inválidas");
        }
    }

    async function signOut(){
        await AsyncStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, loading, isPending, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;