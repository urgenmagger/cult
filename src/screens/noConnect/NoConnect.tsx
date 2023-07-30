import React, {FC, useCallback, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import useNetworkStatus from '../../hooks/useNetworkStatus';
import {RootStackList, Screens} from '../../navigation';

interface Props {
  navigation: NavigationProp<RootStackList>;
}

export const NoConnect: FC<Props> = ({navigation}) => {
  const {isConnected, isInitialized} = useNetworkStatus();

  const handleGoStart = useCallback(() => {
    navigation.navigate(Screens.Start);
  }, [navigation]);

  useEffect(() => {
    if (isConnected && isInitialized) {
      handleGoStart();
    }
  }, [isConnected, isInitialized, handleGoStart]);
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
    color: '#E41E4E',
    fontWeight: 'bold',
  },
});
