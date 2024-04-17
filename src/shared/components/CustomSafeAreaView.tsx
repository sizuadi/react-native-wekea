import {StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function CustomSafeAreaView({children}: PropsWithChildren) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
});
