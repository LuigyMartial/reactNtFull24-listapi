import {ActivityIndicator, FlatList, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import {useEffect, useState} from "react";

interface Post {
    id: number;
    title: string;
}

// services file -> import
// axios instance
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

// request
api.interceptors.request.use(config => {
    console.log('Request sent: ', config);

    return config;
})

// response
api.interceptors.response.use(response => {
    console.log('Response received: ', response)

    return response;
})


const AxiosDemoScreen:React.FC = () => {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchListOfPosts = async () => {
        try {
            setLoading(true);
            const response = await api.get<Post[]>('/posts');

            if(response){
                setData(response.data);
                setLoading(false);
            } else {
                setData([]);
                setLoading(false);
            }

        } catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        fetchListOfPosts();
    }, [])

    //console.log(data);

    const renderItem = ({item} : {item: Post}) =>  (
       <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
       </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Data Fetching using Axios</Text>
            { loading ? (
                <ActivityIndicator size='large' color='#0000ff' />
            ) : (
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={data}
                    renderItem={renderItem}
                />
            )}
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
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
        backgroundColor: '#9CCCFF'
    },
    title: { fontSize: 20, fontWeight: 'bold'}
});
export default AxiosDemoScreen;