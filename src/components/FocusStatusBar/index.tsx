import {StatusBar, StatusBarStyle} from "react-native";

import { useIsFocused } from '@react-navigation/native';

interface StatusBarProps {
    barStyle: StatusBarStyle;
    backgroundColor: string;
}

const FocusStatusBar:React.FC<StatusBarProps> = ({barStyle, backgroundColor}) => {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar barStyle={barStyle} backgroundColor={backgroundColor}/> : null;
}

export default FocusStatusBar;