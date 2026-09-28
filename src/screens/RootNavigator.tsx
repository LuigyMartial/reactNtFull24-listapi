import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen.tsx';
import FlatListScreen from './FlatListScreen.tsx';

export type RootStackParamList = {
  Home: undefined;
  FlatListDemo: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FlatListDemo" component={FlatListScreen} />
        </Stack.Navigator>
    );
}


export default RootNavigator;