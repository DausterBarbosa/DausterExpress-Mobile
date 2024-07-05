import {Text, TouchableOpacity} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import {ButtonsContainer, ButtonContainer, ActionsContainer, DataInfoContainer, DataContainer, DeliveryProgressContainer, DeliveryProgressStatusContainer, DeliveriesInfoPage, DeliveriInfoContainer, DeliveriPageLabelContainer, DeliveriStatusContainer} from "./styles";

export default function DeliveriesInfo(){
    return (
        <DeliveriesInfoPage>
            <DeliveriInfoContainer>
                <DeliveriPageLabelContainer>
                    <Icon name="local-shipping" size={35} color="#4d148c"/>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "#4d148c", marginLeft: 10}}>Detalhes da entrega</Text>
                </DeliveriPageLabelContainer>
                <Text style={{fontWeight: "bold", fontSize: 20, marginTop: 10, marginBottom: 5}}>Destinatário</Text>
                <Text style={{fontSize: 17}}>Petrobrás LTDA</Text>
                <Text style={{fontWeight: "bold", fontSize: 20, marginTop: 10, marginBottom: 5}}>Endereço da Entrega</Text>
                <Text style={{fontSize: 17}}>Rua Lamartine Nogueira, 1700</Text>
                <Text style={{fontSize: 17}}>Viçosa do Ceará, CE / 62300-000</Text>
                <Text style={{fontSize: 17}}>Ao lado do colégio Gladys Beviláqua</Text>
                <Text style={{fontWeight: "bold", fontSize: 20, marginTop: 10, marginBottom: 5}}>Produto</Text>
                <Text style={{fontSize: 17}}>Lote de fuzis AR-15 automáticos</Text>
            </DeliveriInfoContainer>
            <DeliveriStatusContainer>
                <DeliveriPageLabelContainer>
                    <Icon name="edit-note" size={35} color="#4d148c"/>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "#4d148c", marginLeft: 10}}>Status da entrega</Text>
                </DeliveriPageLabelContainer>
                <DeliveryProgressContainer>
                    <DeliveryProgressStatusContainer>
                        <Icon name="check-circle" size={35} color="green"/>
                        <Text style={{textAlign: "center"}}>Aguardando{`\n`}retirada</Text>
                    </DeliveryProgressStatusContainer>
                    <Icon name="trending-flat" size={35} color="#4d148c"/>
                    <DeliveryProgressStatusContainer>
                        <Icon name="pending" size={35} color="#ff6200"/>
                        <Text>Em trânsito</Text>
                    </DeliveryProgressStatusContainer>
                    <Icon name="trending-flat" size={35} color="#4d148c"/>
                    <DeliveryProgressStatusContainer>
                        <Icon name="pending" size={35} color="#ff6200"/>
                        <Text>Entregue</Text>
                    </DeliveryProgressStatusContainer>
                </DeliveryProgressContainer>
                <DataContainer>
                    <DataInfoContainer>
                        <Text style={{fontSize: 17, fontWeight: "bold"}}>DATA DE RETIRADA:</Text>
                        <Text style={{fontSize: 17, marginLeft: 5}}>PENDENTE</Text>
                    </DataInfoContainer>
                    <DataInfoContainer>
                        <Text style={{fontSize: 17, fontWeight: "bold"}}>DATA DE ENTREGA:</Text>
                        <Text style={{fontSize: 17, marginLeft: 5}}>PENDENTE</Text>
                    </DataInfoContainer>
                </DataContainer>
            </DeliveriStatusContainer>
            <ActionsContainer>
                <DeliveriPageLabelContainer>
                    <Icon name="settings" size={35} color="#4d148c"/>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "#4d148c", marginLeft: 10}}>Ações</Text>
                </DeliveriPageLabelContainer>
                <ButtonsContainer>
                    <ButtonContainer>
                        <Icon name="cancel" size={35} color="#e74040"/>
                        <Text style={{textAlign: "center", marginTop: 5, fontWeight: "bold"}}>INFORMAR{`\n`}PROBLEMA</Text>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Icon name="error" size={35} color="#e7ba40"/>
                        <Text style={{textAlign: "center", marginTop: 5, fontWeight: "bold"}}>LISTAR{`\n`}PROBLEMAS</Text>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Icon name="check-circle" size={35} color="green"/>
                        <Text style={{textAlign: "center", marginTop: 5, fontWeight: "bold"}}>REALIZAR{`\n`}ENTREGA</Text>
                    </ButtonContainer>
                </ButtonsContainer>
            </ActionsContainer>
        </DeliveriesInfoPage>
    );
}