import {Text} from "react-native";

import {useNavigation, useRoute} from "@react-navigation/native";

import FocusStatusBar from "../../components/FocusStatusBar";

import Icon from "react-native-vector-icons/MaterialIcons";

import {StatusContainerItemLabels, StatusContainerItem, StatusContainerTag, StatusContainer, ButtonsContainer, ButtonContainer, ActionsContainer, DeliveriesInfoPage, DeliveriInfoContainer, DeliveriPageLabelContainer} from "./styles";

export default function DeliveriesInfo(){
    const navigation = useNavigation();

    const route = useRoute();

    function statusColor(status:string){
        switch(status){
            case "pendente":
                return "#4d148c";
            case "retirado":
                return "#ff6200";
            case "entregue":
                return "green";
            case "problema":
                return "#e7ba40";
            case "cancelado":
                return "#e74040";
        }
    }

    function handleFooterToolBar(status:string){
        switch(status){
            case "pendente":
                return false;
            case "retirado":
                return true;
            case "entregue":
                return false;
            case "problema":
                return true;
            case "cancelado":
                return false;
        }
    }

    return (
        <DeliveriesInfoPage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <DeliveriInfoContainer>
                <Text style={{fontWeight: "bold", fontSize: 20, marginBottom: 5, color: "#333"}}>Destinatário</Text>
                <Text style={{fontSize: 17}}>{route.params.destinatario.nome}</Text>
                <Text style={{fontWeight: "bold", fontSize: 20, marginTop: 10, marginBottom: 5, color: "#333"}}>Endereço da Entrega</Text>
                <Text style={{fontSize: 17}}>{route.params.destinatario.endereco}, {route.params.destinatario.numero}</Text>
                <Text style={{fontSize: 17}}>{route.params.destinatario.cidade}, {route.params.destinatario.estado} / {route.params.destinatario.cep}</Text>
                <Text style={{fontSize: 17}}>{route.params.destinatario.complemento}</Text>
                <Text style={{fontWeight: "bold", fontSize: 20, marginTop: 10, marginBottom: 5, color: "#333"}}>Produto</Text>
                <Text style={{fontSize: 17}}>{route.params.encomenda}</Text>
            </DeliveriInfoContainer>
            <StatusContainer>
                <StatusContainerTag
                    backgroundColor={statusColor(route.params.status)}
                >
                    {route.params.status === "pendente" && "PENDENTE"}
                    {route.params.status === "retirado" && "EM TRÂNSITO"}
                    {route.params.status === "entregue" && "ENTREGUE"}
                    {route.params.status === "problema" && "PROBLEMA"}
                    {route.params.status === "cancelado" && "CANCELADO"}
                </StatusContainerTag>
                <StatusContainerItem>
                    <Icon name="check-circle" size={35} color="green"/>
                    <StatusContainerItemLabels>
                        <Text style={{fontWeight: "bold", fontSize: 17, color: "#333"}}>Cadastrado</Text>
                        <Text style={{fontSize: 17}}>09/11/1945</Text>
                    </StatusContainerItemLabels>
                </StatusContainerItem>
                <StatusContainerItem>
                    <Icon name="check-circle" size={35} color="#b9b9b9"/>
                    <StatusContainerItemLabels>
                        <Text style={{fontWeight: "bold", fontSize: 17, color: "#333"}}>Aguardando retirada</Text>
                        <Text style={{fontSize: 17}}>Pendente</Text>
                    </StatusContainerItemLabels>
                </StatusContainerItem>
                <StatusContainerItem>
                    <Icon name="check-circle" size={35} color="#b9b9b9"/>
                    <StatusContainerItemLabels>
                        <Text style={{fontWeight: "bold", fontSize: 17, color: "#333"}}>Em trânsito</Text>
                        <Text style={{fontSize: 17}}>Pendente</Text>
                    </StatusContainerItemLabels>
                </StatusContainerItem>
                <StatusContainerItem>
                    <Icon name="check-circle" size={35} color="#b9b9b9"/>
                    <StatusContainerItemLabels>
                        <Text style={{fontWeight: "bold", fontSize: 17, color: "#333"}}>Entregue</Text>
                        <Text style={{fontSize: 17}}>Pendente</Text>
                    </StatusContainerItemLabels>
                </StatusContainerItem>
            </StatusContainer>
            {handleFooterToolBar(route.params.status) && (
                <ActionsContainer>
                    <DeliveriPageLabelContainer>
                        <Icon name="settings" size={35} color="#333"/>
                        <Text style={{fontSize: 20, fontWeight: "bold", color: "#333", marginLeft: 10}}>Ações</Text>
                    </DeliveriPageLabelContainer>
                    <ButtonsContainer>
                        <ButtonContainer onPress={() => navigation.navigate("Informar problema")}>
                            <Icon name="cancel" size={35} color="#e74040"/>
                            <Text style={{textAlign: "center", marginTop: 5, fontWeight: "bold"}}>INFORMAR{`\n`}PROBLEMA</Text>
                        </ButtonContainer>
                        <ButtonContainer onPress={() => navigation.navigate("Lista de problemas", route.params.problemas)}>
                            <Icon name="error" size={35} color="#e7ba40"/>
                            <Text style={{textAlign: "center", marginTop: 5, fontWeight: "bold"}}>LISTAR{`\n`}PROBLEMAS</Text>
                        </ButtonContainer>
                        <ButtonContainer onPress={() => navigation.navigate("Tirar foto")}>
                            <Icon name="check-circle" size={35} color="green"/>
                            <Text style={{textAlign: "center", marginTop: 5, fontWeight: "bold"}}>REALIZAR{`\n`}ENTREGA</Text>
                        </ButtonContainer>
                    </ButtonsContainer>
                </ActionsContainer>
            )}
        </DeliveriesInfoPage>
    );
}