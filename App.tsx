import React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./src/screens/RootNavigator.tsx";


function App(): React.JSX.Element {
    // @ts-ignore
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}


export default App;