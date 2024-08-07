import {useState, useContext, useEffect} from "react";

import {FlatList} from "react-native";

import FocusStatusBar from "../../components/FocusStatusBar";

import {BubbleMessage, SupportChatPage, MessagensContainer, TextFieldContainer, TextField, SendButtom} from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";

import firestore, {Filter, FirebaseFirestoreTypes} from "@react-native-firebase/firestore";

import AuthContext from "../../contexts/auth";

interface MessagesProps{
    id: string;
    content: string;
    receiver_id: string;
    receiver_name: string;
    sender_id: string;
    sender_name: string;
    timestamp: FirebaseFirestoreTypes.Timestamp;
}

export default function SupportChat(){
    const [messages, setMessages] = useState<MessagesProps[]>([]);

    const [message, setMessage] = useState("");

    const {user} = useContext(AuthContext);

    function onResult(QuerySnapshot:FirebaseFirestoreTypes.QuerySnapshot){
        const lastMessages: MessagesProps[] = [];

        QuerySnapshot.forEach((doc) => {
            lastMessages.push({
                ...doc.data() as MessagesProps,
                timestamp: doc.data().timestamp,
                id: doc.id,
            });
        });

        setMessages(lastMessages);
    }

    function onError(){

    }

    function sendMessage(){
        firestore()
        .collection('messages')
        .add({
            sender_id: user!.id,
            sender_name: user!.nome + " " + user!.sobrenome,
            receiver_id: null,
            receiver_name: null,
            content: message.trim(),
            timestamp: firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
            console.log('User added!');
        });

        setMessage("");
    }

    useEffect(() => {
        function handleRealTime(){
            firestore().collection('messages').orderBy("timestamp", "desc").where(Filter.or(Filter("sender_id", "==" , user?.id), Filter("receiver_id", "==" , user?.id))).onSnapshot(onResult, onError);
        }

        handleRealTime();
    }, []);
    
    return (
        <SupportChatPage>
            <FocusStatusBar barStyle="dark-content" backgroundColor="#FFF"/>
            <MessagensContainer>
                <FlatList
                    inverted
                    data={messages}
                    contentContainerStyle={{padding: 10}}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <BubbleMessage key={item.id} backgroundColor={item.sender_id === user!.id ? "#ff6200" : "#4d148c"} alignSelf={item.sender_id === user!.id ? "flex-end" : "flex-start"}>
                            {item.content}
                        </BubbleMessage>
                    )}
                />
            </MessagensContainer>
            <TextFieldContainer>
                <TextField placeholder="Mensagem" value={message} onChangeText={(e) => setMessage(e)}/>
                <SendButtom onPress={sendMessage} disabled={message.trim() === ""}>
                    <Icon name="send" size={30} color="#FFF"/>
                </SendButtom>
            </TextFieldContainer>
        </SupportChatPage>
    );
}