import {useState} from "react";

import {Text, View} from "react-native";

import FocusStatusBar from "../../components/FocusStatusBar";

import {ItemContainer, ItemInfoContainer,  ListItemContainer, ItemContainerStatus, ListContainerButton, ListLabelContainer, ListContainerLabel, ListContainer, DeliveriesPage, ToolsBarContainer, SearchBarContainer, SearchBarInput, SearchBarButton} from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";

export default function Deliveries(){
    const [openList, setOpenList] = useState(false);

    return (
        <DeliveriesPage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <ToolsBarContainer>
                <Text style={{fontSize: 25, fontWeight: "bold", color: "#494E5D"}}>Suas entregas</Text>
                <SearchBarContainer>
                    <SearchBarInput placeholder="Pequisar item"/>
                    <View style={{position: "relative"}}>
                        <SearchBarButton onPress={() => setOpenList(!openList)}>
                            <Icon name="filter-list" size={35} color="#ff6200"/>
                        </SearchBarButton>
                        {openList && (
                            <ListContainer>
                                <ListContainerButton activeOpacity={1} underlayColor="#f1f1f1" onPress={() => {}}>
                                    <ListLabelContainer>
                                        <ListContainerLabel>Todos</ListContainerLabel>
                                        <Icon name="check" size={20} color="#ff6200"/>
                                    </ListLabelContainer>
                                </ListContainerButton>
                                <ListContainerButton activeOpacity={1} underlayColor="#f1f1f1" onPress={() => {}}>
                                    <ListLabelContainer>
                                        <ListContainerLabel>Pendentes</ListContainerLabel>
                                        {/* <Icon name="check" size={20} color="#ff6200"/> */}
                                    </ListLabelContainer>
                                </ListContainerButton>
                                <ListContainerButton activeOpacity={1} underlayColor="#f1f1f1" onPress={() => {}}>
                                    <ListLabelContainer>
                                        <ListContainerLabel>Entregues</ListContainerLabel>
                                        {/* <Icon name="check" size={20} color="#ff6200"/> */}
                                    </ListLabelContainer>
                                </ListContainerButton>
                                <ListContainerButton activeOpacity={1} underlayColor="#f1f1f1" onPress={() => {}}>
                                    <ListLabelContainer>
                                        <ListContainerLabel>Problemas</ListContainerLabel>
                                        {/* <Icon name="check" size={20} color="#ff6200"/> */}
                                    </ListLabelContainer>
                                </ListContainerButton>
                                <ListContainerButton activeOpacity={1} underlayColor="#f1f1f1" onPress={() => {}}>
                                    <ListLabelContainer>
                                        <ListContainerLabel>Cancelados</ListContainerLabel>
                                        {/* <Icon name="check" size={20} color="#ff6200"/> */}
                                    </ListLabelContainer>
                                </ListContainerButton>
                            </ListContainer>
                        )}
                    </View>
                </SearchBarContainer>
            </ToolsBarContainer>
            <ListItemContainer>
                <ItemContainer>
                    <ItemContainerStatus backgroundColor="#b491e4">
                        <Icon name="pending" size={40} color="#FFF"/>
                    </ItemContainerStatus>
                    <ItemInfoContainer>
                        <Text style={{fontWeight: "bold", fontSize: 17}}>Embrapa LTDA</Text>
                        <Text style={{fontSize: 15}}>12.345.678/0001-00</Text>
                        <Text style={{fontSize: 15}}>Viçosa do Ceará</Text>
                    </ItemInfoContainer>
                </ItemContainer>
                <ItemContainer>
                    <ItemContainerStatus backgroundColor="#fa9657">
                        <Icon name="arrow-circle-right" size={40} color="#FFF"/>
                    </ItemContainerStatus>
                    <ItemInfoContainer>
                        <Text style={{fontWeight: "bold", fontSize: 17}}>Embraer</Text>
                        <Text style={{fontSize: 15}}>12.345.678/0001-00</Text>
                        <Text style={{fontSize: 15}}>Viçosa do Ceará</Text>
                    </ItemInfoContainer>
                </ItemContainer>
                <ItemContainer>
                    <ItemContainerStatus backgroundColor="#87d6b7">
                        <Icon name="check-circle" size={40} color="#FFF"/>
                    </ItemContainerStatus>
                    <ItemInfoContainer>
                        <Text style={{fontWeight: "bold", fontSize: 17}}>Vale do Rio Doce</Text>
                        <Text style={{fontSize: 15}}>12.345.678/0001-00</Text>
                        <Text style={{fontSize: 15}}>Viçosa do Ceará</Text>
                    </ItemInfoContainer>
                </ItemContainer>
                <ItemContainer>
                    <ItemContainerStatus backgroundColor="#dec560">
                        <Icon name="error" size={40} color="#FFF"/>
                    </ItemContainerStatus>
                    <ItemInfoContainer>
                        <Text style={{fontWeight: "bold", fontSize: 17}}>Petrobrás</Text>
                        <Text style={{fontSize: 15}}>12.345.678/0001-00</Text>
                        <Text style={{fontSize: 15}}>Viçosa do Ceará</Text>
                    </ItemInfoContainer>
                </ItemContainer>
                <ItemContainer>
                    <ItemContainerStatus backgroundColor="#e6a396">
                        <Icon name="cancel" size={40} color="#FFF"/>
                    </ItemContainerStatus>
                    <ItemInfoContainer>
                        <Text style={{fontWeight: "bold", fontSize: 17}}>Lockheed Martin</Text>
                        <Text style={{fontSize: 15}}>12.345.678/0001-00</Text>
                        <Text style={{fontSize: 15}}>Viçosa do Ceará</Text>
                    </ItemInfoContainer>
                </ItemContainer>
            </ListItemContainer>
        </DeliveriesPage>
    );
}