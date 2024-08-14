import styled from "styled-components/native";

export const SupportChatPage = styled.View`
    flex: 1;
    background: #EEE;
`;

export const MessagensContainer = styled.View`
    flex: 1;
`;

export const TextFieldContainer = styled.View`
    flex-direction: row;
    padding: 10px;
`;

export const TextField = styled.TextInput`
    background: #FFF;
    flex: 1;
    border-radius: 100px;
    padding: 10px 15px;
    font-size: 17px;
    elevation: 3;
`;

export const SendButtom = styled.TouchableOpacity`
    background: #ff6200;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    width: 50px;
    height: 50px;
    margin-left: 5px;
    elevation: 3;
`;

export const EmptyChatPanel = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const BubbleMessage = styled.Text<{
    backgroundColor:string;
    alignSelf:string;
}>`
    background: ${props => props.backgroundColor};
    color: #FFF;
    font-size: 17px;
    padding: 10px;
    border-radius: 15px;
    align-self: flex-start;
    max-width: 300px;
    align-self: ${props => props.alignSelf};
    margin-top: 3px; 
`;