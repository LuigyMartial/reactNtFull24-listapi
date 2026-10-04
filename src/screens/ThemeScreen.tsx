import {StyleSheet, Switch, Text, View} from "react-native";
import {useTheme} from "../context/ThemeContext.tsx";


const ThemeScreen: React.FC = () => {
    const {theme, toggleTheme} = useTheme();

    const isDarkMode = theme === 'dark';

    return (
        <View
            style={[styles.container,
                {
                    backgroundColor: isDarkMode ? "#000000" : "#ffffff"
                }
            ]}
        >
            <Text style={[styles.header, {
                color: isDarkMode ? "#ffffff" : "#000000"
            }]}>Toggle Theme Demo</Text>
            <Switch
                value={isDarkMode}
                onValueChange={toggleTheme}
                trackColor={{false:'#757677', true: '#81b0ff'}}
                thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor={'#3e3e3e'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    header: { fontSize: 20, fontWeight: "bold" }
});

export default  ThemeScreen;