import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootNavigator.tsx';

const topics = [
  {
    id: 1,
    title: 'Flat list demo',
    screen: 'FlatListDemo',
  }
]

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View>
      <Text>Home screen</Text>
      <Button title='Flat List Demo' onPress={() => navigation.navigate('FlatListDemo')} />
    </View>
  );
}

export default HomeScreen;