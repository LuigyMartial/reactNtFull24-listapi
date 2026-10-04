import {ActivityIndicator, FlatList, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";

interface Post {
    id: number;
    title: string;
}


const DataFetching: React.FC = () => {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchListOfPost = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data: Post[] = await response.json();

            if(data){
                setData(data);
                setLoading(false);
            } else {
                setData([data]);;
                setLoading(false);
            }
        } catch (e){
            console.error(e)
        }
    }

    useEffect(() => {
        fetchListOfPost()
    }, [])

    //console.log(data);
    const renderItem = ({item} : {item: Post}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Data Fetching using API</Text>
            { loading ? (
                <ActivityIndicator size={'large'} color={'#0000ff'} />
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
        backgroundColor: "#c6df0a"
    },
    title: { fontSize: 16, fontWeight: 'bold' }
});

export default DataFetching;