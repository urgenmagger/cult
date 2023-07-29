import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackList, Screens} from '../../navigation';

import {Button} from '../../components/Button';

interface Props {
  navigation: NavigationProp<RootStackList>;
}

export const Start: FC<Props> = ({navigation}) => {
  const handleGoToLogin = () => {
    navigation.navigate(Screens.Login);
  };
  return (
    <View style={styles.container}>
      <Button onPress={() => handleGoToLogin()} label="Начать" />
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
