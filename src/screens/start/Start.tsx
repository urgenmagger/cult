import React, {FC, useCallback, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackList, Screens} from '../../navigation';

import {Button} from '../../components/Button';
import useNetworkStatus from '../../hooks/useNetworkStatus';

interface Props {
  navigation: NavigationProp<RootStackList>;
}

export const Start: FC<Props> = ({navigation}) => {
  const {isConnected, isInitialized} = useNetworkStatus();

  const handleGoToLogin = () => {
    navigation.navigate(Screens.Login);
  };
  const handleGoNoConnect = useCallback(() => {
    navigation.navigate(Screens.NoConnect);
  }, [navigation]);

  useEffect(() => {
    if (isInitialized && !isConnected) {
      handleGoNoConnect();
    }
  }, [isConnected, isInitialized, handleGoNoConnect]);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => handleGoToLogin()}
        label={isConnected ? 'Начать' : 'NO connect'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
