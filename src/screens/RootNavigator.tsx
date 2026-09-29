import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen.tsx';
import FlatListScreen from './FlatListScreen.tsx';
import SectionListScreen from "./SectionListScreen.tsx";

export type RootStackParamList = {
  Home: undefined;
  FlatListDemo: undefined;
  SectionListDemo: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FlatListDemo" component={FlatListScreen} />
          <Stack.Screen name="SectionListDemo" component={SectionListScreen} />
        </Stack.Navigator>
    );
}


export default RootNavigator;