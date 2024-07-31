import {useState, useContext} from "react";

import {Text, View, ActivityIndicator, FlatList} from "react-native";

import {useNavigation} from "@react-navigation/native";

import FocusStatusBar from "../../components/FocusStatusBar";

import {ItemContainer, ItemInfoContainer,  ListItemContainer, ItemContainerStatus, ListContainerButton, ListLabelContainer, ListContainerLabel, ListContainer, DeliveriesPage, ToolsBarContainer, SearchBarContainer, SearchBarInput, SearchBarButton} from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";

import {useGetDeliveries} from "../../controllers/DeliveriesController";

import {Menu, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

import DeliveryContext from "../../contexts/deliveries";

export default function Deliveries(){
    const navigation = useNavigation();

    const {handleSetDelivery} = useContext(DeliveryContext);

    const [queryParams, setQueryParams] = useState({
        page: 0,
        status: "todos",
        encomenda: "",
    });

    const [searchOrder, setSearchOrder] = useState("");

    const {data, isLoading} = useGetDeliveries(queryParams);

    function handleDeliveryDetails(item:any){
        handleSetDelivery(item, queryParams);
        navigation.navigate("Detalhes");
    }

    function handleStatus(status:string){
        setSearchOrder("");
        if(status !== queryParams.status){
            setQueryParams({
                page: 0,
                status,
                encomenda: ""
            });
        }
    }

    function handleOrderSearchField(search:string){
        setSearchOrder(search);

        if(search === ""){
            setQueryParams({
                status: "todos",
                page: 0,
                encomenda: "",
            });
        }
    }

    function handleOrderSearch(){
        if(searchOrder.trim() !== ""){
            setQueryParams({
                status: "todos",
                page: 0,
                encomenda: searchOrder,
            });
        }
    }

    return (
        <DeliveriesPage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <ToolsBarContainer>
                <Text style={{fontSize: 25, fontWeight: "bold", color: "#494E5D"}}>Suas entregas</Text>
                <SearchBarContainer>
                    <SearchBarInput onChangeText={(e) => handleOrderSearchField(e)} placeholder="Pequisar item" value={searchOrder} onSubmitEditing={handleOrderSearch}/>
                    <Menu>
                        <MenuTrigger>
                            <Icon name="filter-list" size={35} color="#ff6200"/>
                        </MenuTrigger>
                        <MenuOptions optionsContainerStyle={{width: 150}}>
                            <MenuOption onSelect={() => handleStatus("todos")}>
                                <ListLabelContainer>
                                    <ListContainerLabel>Todos</ListContainerLabel>
                                    {queryParams.status === "todos" && <Icon name="check" size={20} color="#ff6200"/>}
                                </ListLabelContainer>
                            </MenuOption>
                            <MenuOption onSelect={() => handleStatus("retirado")}>
                                <ListLabelContainer>
                                    <ListContainerLabel>Em trânsito</ListContainerLabel>
                                    {queryParams.status === "retirado" && <Icon name="check" size={20} color="#ff6200"/>}
                                </ListLabelContainer>
                            </MenuOption>
                            <MenuOption onSelect={() => handleStatus("pendente")}>
                                <ListLabelContainer>
                                    <ListContainerLabel>Pendentes</ListContainerLabel>
                                    {queryParams.status === "pendente" && <Icon name="check" size={20} color="#ff6200"/>}
                                </ListLabelContainer>
                            </MenuOption>
                            <MenuOption onSelect={() => handleStatus("entregue")}>
                                <ListLabelContainer>
                                    <ListContainerLabel>Entregues</ListContainerLabel>
                                    {queryParams.status === "entregue" && <Icon name="check" size={20} color="#ff6200"/>}
                                </ListLabelContainer>
                            </MenuOption>
                            <MenuOption onSelect={() => handleStatus("problema")}>
                                <ListLabelContainer>
                                    <ListContainerLabel>Problemas</ListContainerLabel>
                                    {queryParams.status === "problema" && <Icon name="check" size={20} color="#ff6200"/>}
                                </ListLabelContainer>
                            </MenuOption>
                            <MenuOption onSelect={() => handleStatus("cancelado")}>
                                <ListLabelContainer>
                                    <ListContainerLabel>Cancelados</ListContainerLabel>
                                    {queryParams.status === "cancelado" && <Icon name="check" size={20} color="#ff6200"/>}
                                </ListLabelContainer>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </SearchBarContainer>
            </ToolsBarContainer>
            {isLoading ? (
                 <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                    <ActivityIndicator size="large" color="#ff6200"/>
                </View>
            ) : (
                data.data.length > 0 ? (
                    <FlatList
                    contentContainerStyle={{padding: 10, backgroundColor: "#FFF"}}
                    data={data.data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <ItemContainer key={item.id} onPress={() => handleDeliveryDetails(item)}>
                            {item.status === "pendente" && (
                                <ItemContainerStatus backgroundColor="#b491e4">
                                    <Icon name="pending" size={40} color="#FFF"/>
                                </ItemContainerStatus>
                            )}
                            {item.status === "retirado" && (
                                <ItemContainerStatus backgroundColor="#fa9657">
                                    <Icon name="arrow-circle-right" size={40} color="#FFF"/>
                                </ItemContainerStatus>
                            )}
                                {item.status === "entregue" && (
                                <ItemContainerStatus backgroundColor="#87d6b7">
                                    <Icon name="check-circle" size={40} color="#FFF"/>
                                </ItemContainerStatus>
                            )}
                            {item.status === "problema" && (
                                <ItemContainerStatus backgroundColor="#dec560">
                                    <Icon name="error" size={40} color="#FFF"/>
                                </ItemContainerStatus>
                            )}
                            {item.status === "cancelado" && (
                                <ItemContainerStatus backgroundColor="#e6a396">
                                    <Icon name="cancel" size={40} color="#FFF"/>
                                </ItemContainerStatus>
                            )}
                            <ItemInfoContainer>
                                <Text style={{fontWeight: "bold", fontSize: 17}}>{item.destinatario.nome}</Text>
                                <Text style={{fontSize: 15}}>{item.destinatario.cnpj}</Text>
                                <Text style={{fontSize: 15}}>{item.destinatario.cidade}</Text>
                            </ItemInfoContainer>
                        </ItemContainer>
                    )}
                    />
                ) : (
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <Icon name="search" size={100} color="#666"/>
                        <Text style={{fontSize: 20, color: "#666"}}>Encomendas não encontradas.</Text>
                    </View>
                )
            )}
        </DeliveriesPage>
    );
}