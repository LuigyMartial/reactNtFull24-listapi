import React, { useState } from 'react';
import {
    Pressable,
    StyleSheet,
  Text, TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';


const TouchableScreen: React.FC = () => {
    const [count, setCount] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Touchable Demo</Text>
            <TouchableHighlight
                onPress={() => setCount(count + 1)}
            >
                <View style={styles.btn}>
                    <Text style={styles.btnText}>TouchableWithoutFeedback</Text>
                </View>
            </TouchableHighlight>
            <Pressable
                onPress={() => setCount(count + 1)}
                style={({pressed}) => [
                    styles.btn,
                    {
                        backgroundColor: pressed ? "#dfef02" : "#b4620b",
                    },
                ]}
            >
                {({pressed}) => (
                    <Text style={[styles.btnText, {color: pressed ? 'red' : 'blue'}]}>
                        {pressed ? 'Pressed Now' : 'Pressed' }
                    </Text>)}
            </Pressable>
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
    },
    btn: {
        marginBottom: 10,
        padding: 10,
        minWidth: 250,
        alignItems: 'center',
        backgroundColor: "#4ca008",
        borderRadius: 5,
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff",
    }
});

export default TouchableScreen;