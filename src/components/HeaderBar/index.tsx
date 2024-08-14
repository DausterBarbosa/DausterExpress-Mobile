import {TouchableOpacity, View} from "react-native";

import {AppBarContainer, Logo, LogoText} from "./styles";

import {useNavigation, DrawerActions} from "@react-navigation/native";

import Icon from "react-native-vector-icons/MaterialIcons";

interface HeaderBarProps {
    colorMenuIcon: string;
    colorNotificationIcon: string;
    colorBackgroundHeader: string;
    colorFirstName: string;
    colorSecondName: string;
}

const HeaderBar:React.FC<HeaderBarProps> = ({colorMenuIcon, colorNotificationIcon, colorBackgroundHeader, colorFirstName, colorSecondName}) => {
    const navigation = useNavigation();
    
    return (
        <AppBarContainer backgroundColor={colorBackgroundHeader}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Icon name="menu" size={35} color={colorMenuIcon}/>
            </TouchableOpacity>
            <Logo><LogoText color={colorFirstName}>Dauster</LogoText><LogoText color={colorSecondName}>Express</LogoText></Logo>
            <View/>
        </AppBarContainer>
    );
}

export default HeaderBar;