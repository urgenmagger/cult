import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackList, Screens} from '../../navigation';

import {ImageModal} from './components/ImageModal';
import {CustomHeader} from './components/HeaderCustom';
import {API_URL, REDIRECT_URL} from '../../utils/constants';

interface Props {
  navigation: NavigationProp<RootStackList>;
  route: {
    params: {
      email: string;
    };
  };
}

export const Home: FC<Props> = ({route, navigation}) => {
  const {email} = route.params;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleGoStart = () => {
    navigation.navigate(Screens.Start);
  };

  return (
    <>
      <CustomHeader title={email} onBackPress={handleGoStart} />
      <View style={styles.container}>
        {API_URL ? (
          <TouchableOpacity onPress={openModal}>
            <Image style={styles.image} source={{uri: API_URL}} />
          </TouchableOpacity>
        ) : (
          <Text>Loading...</Text>
        )}
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => Linking.openURL(REDIRECT_URL)}>
            <Text style={styles.link}>unicult</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ImageModal open={isModalOpen} onBackPress={closeModal} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  link: {
    fontSize: 18,
    color: '#E41E4E',
    fontWeight: 'bold',
  },
});
