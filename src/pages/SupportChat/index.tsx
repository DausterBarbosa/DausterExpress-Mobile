import {FlatList} from "react-native";

import FocusStatusBar from "../../components/FocusStatusBar";

import {BubbleMessage, SupportChatPage, MessagensContainer, TextFieldContainer, TextField, SendButtom} from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";

export default function SupportChat(){
    return (
        <SupportChatPage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <MessagensContainer>
                <FlatList
                    data={[
                        {
                            id: "1",
                            adm: 123,
                            entre: 321,
                            message: "Sistemas militares foram encontraos sob  opoder do pkk oa sul da Turquia"
                        },
                        {
                            id: "2",
                            adm: 123,
                            entre: 321,
                            message: "Sistemas militares foram encontraos sob  opoder do pkk oa sul da Turquia"
                        },
                        {
                            id: "3",
                            adm: 123,
                            entre: 321,
                            message: "Sistemas militares foram encontraos sob  opoder do pkk oa sul da Turquia"
                        },
                        {
                            id: "4",
                            adm: 321,
                            entre: 123,
                            message: "Em carater de urgência a entrega deve ser feito."
                        },
                        {
                            id: "5",
                            adm: 321,
                            entre: 123,
                            message: "Em carater de urgência a entrega deve ser feito."
                        },
                        {
                            id: "6",
                            adm: 123,
                            entre: 321,
                            message: "Sistemas militares foram encontraos sob  opoder do pkk oa sul da Turquia"
                        },
                        {
                            id: "7",
                            adm: 321,
                            entre: 123,
                            message: "Em carater de urgência a entrega deve ser feito."
                        },
                        {
                            id: "8",
                            adm: 321,
                            entre: 123,
                            message: "Vamos nessa camaradas fazer as coisas mudarem Em carater de urgência a entrega deve ser feito."
                        }
                    ]}
                    inverted
                    contentContainerStyle={{padding: 10}}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <BubbleMessage key={item.id} backgroundColor={item.adm === 123 ? "#ff6200" : "#4d148c"} alignSelf={item.adm === 123 ? "flex-end" : "flex-start"}>
                            {item.message}
                        </BubbleMessage>
                    )}
                />
            </MessagensContainer>
            <TextFieldContainer>
                <TextField placeholder="Mensagem"/>
                <SendButtom>
                    <Icon name="send" size={30} color="#FFF"/>
                </SendButtom>
            </TextFieldContainer>
        </SupportChatPage>
    );
}