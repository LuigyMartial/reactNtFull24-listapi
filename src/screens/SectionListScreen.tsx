import React from 'react';
import {SectionList, StyleSheet, Text, View } from 'react-native';

const SECTION_DATA = [
  {
    title: 'Men',
    data: ['Men Tshirt 1', 'Men Shirt 1', 'Jeans'],
  },
  {
    title: 'Women',
    data: ['Women Tshirt 1', 'Women Shirt 1', 'Women Jeans'],
  },
  {
    title: 'Kids',
    data: ['Kids Tshirt 1', 'Kids Shirt 1', 'Kids Jeans'],
  },
  {
    title: 'Watches',
    data: ['Watches 1', 'Watches 2', 'Watches 3'],
  }
];


const SectionListScreen: React.FC = () => {
    const handleRenderItem = ({item}: {item: string}) => (
        <View style={styles.item}>
            <Text>{item}</Text>
        </View>
    )

    const renderSectionHeader = ({section: {title}}: {section: {title: string}}) => (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Section List</Text>
            <SectionList
                keyExtractor={(item, index) => item + index}
                renderSectionHeader={renderSectionHeader}
                sections={SECTION_DATA}
                renderItem={handleRenderItem}

            />
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
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    sectionHeader: {
        padding: 5,
        backgroundColor: '#f0f0f0',
    },
     sectionHeaderText: { fontSize: 20, fontWeight: 'bold' }

});

export default SectionListScreen;