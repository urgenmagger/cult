import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const NoConnect: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Нет связи</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
