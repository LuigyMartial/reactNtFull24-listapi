import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./src/screens/RootNavigator.tsx";
import {ThemeProvider} from "./src/context/ThemeContext.tsx";

function App(): React.JSX.Element {
    // @ts-ignore
    return (
        <ThemeProvider>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </ThemeProvider>
    )
}


export default App;