import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen.tsx';
import FlatListScreen from './FlatListScreen.tsx';
import SectionListScreen from "./SectionListScreen.tsx";
import TouchableScreen from "./TouchableScreen.tsx";
import ModalScreen from "./ModalScreen.tsx";

export type RootStackParamList = {
  Home: undefined;
  FlatListDemo: undefined;
  SectionListDemo: undefined;
  TouchableDemo: undefined;
  ModalDemo: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="FlatListDemo" component={FlatListScreen} />
            <Stack.Screen name="SectionListDemo" component={SectionListScreen} />
            <Stack.Screen name="TouchableDemo" component={TouchableScreen} />
            <Stack.Screen name="ModalDemo" component={ModalScreen} />
        </Stack.Navigator>
    );
}


export default RootNavigator;