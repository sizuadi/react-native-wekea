import React from 'react';
import {RootStackParamList} from '../../shared/constants/types';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {Button, StyleSheet, Text, View} from 'react-native';

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;
export default function DetailScreen({route, navigation}: DetailScreenProps) {
  const {ItemID} = route.params;
  return (
    <View style={styles.container}>
      <Text>Homescreen</Text>
      <Text>ItemID : {ItemID}</Text>
      <Button title="Back To Home" onPress={() => navigation.goBack()} />
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
