import {Text} from "react-native";

import {useNavigation} from "@react-navigation/native";

import FocusStatusBar from "../../components/FocusStatusBar";

import Icon from "react-native-vector-icons/MaterialIcons";

import {StatusContainerItemLabels, StatusContainerItem, StatusContainerTag, StatusContainer, ButtonsContainer, ButtonContainer, ActionsContainer, DeliveriesInfoPage, DeliveriInfoContainer, DeliveriPageLabelContainer} from "./styles";

export default function DeliveriesInfo(){
    const navigation = useNavigation();

    return (
        <DeliveriesInfoPage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <DeliveriInfoContainer>
                <Text style={{fontWeight: "bold", fontSize: 20, marginBottom: 5, color: "#333"}}>Destinatário</Text>
                <Text style={{fontSize: 17}}>Petrobrás LTDA</Text>
                <Text style={{fontWeight: "bold", fontSize: 20, marginTop: 10, marginBottom: 5, color: "#333"}}>Endereço da Entrega</Text>
                <Text style={{fontSize: 17}}>Rua Lamartine Nogueira, 1700</Text>
                <Text style={{fontSize: 17}}>Viçosa do Ceará, CE / 62300-000</Text>
                <Text style={{fontSize: 17}}>Ao lado do colégio Gladys Beviláqua</Text>
                <Text style={{fontWeight: "bold", fontSize: 20, marginTop: 10, marginBottom: 5, color: "#333"}}>Produto</Text>
                <Text style={{fontSize: 17}}>Lote de fuzis AR-15 automáticos</Text>
            </DeliveriInfoContainer>
            <StatusContainer>
                <StatusContainerTag>PENDENTE</StatusContainerTag>
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
                    <ButtonContainer onPress={() => navigation.navigate("Lista de problemas")}>
                        <Icon name="error" size={35} color="#e7ba40"/>
                        <Text style={{textAlign: "center", marginTop: 5, fontWeight: "bold"}}>LISTAR{`\n`}PROBLEMAS</Text>
                    </ButtonContainer>
                    <ButtonContainer onPress={() => navigation.navigate("Tirar foto")}>
                        <Icon name="check-circle" size={35} color="green"/>
                        <Text style={{textAlign: "center", marginTop: 5, fontWeight: "bold"}}>REALIZAR{`\n`}ENTREGA</Text>
                    </ButtonContainer>
                </ButtonsContainer>
            </ActionsContainer>
        </DeliveriesInfoPage>
    );
}