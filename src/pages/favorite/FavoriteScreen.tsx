import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/constants/types';

type Props = NativeStackScreenProps<RootStackParamList>;
export default function FavoriteScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Text style={{color: '#000'}}>Favorite</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail', {ItemID: 10})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
