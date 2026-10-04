import {StyleSheet, Text, View} from "react-native";


const AxiosDemoScreen:React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Data Fetching using Axios</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
export default AxiosDemoScreen;