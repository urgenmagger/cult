import React, {FC} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {API_URL} from '../../../utils/constants';

interface Props {
  onBackPress(): void;
  open: boolean;
}

export const ImageModal: FC<Props> = ({onBackPress, open}) => {
  return (
    <Modal visible={open} transparent={true}>
      <View style={styles.modalContainer}>
        <Image
          style={styles.fullscreenImage}
          source={{uri: API_URL}}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.closeButton} onPress={onBackPress}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  fullscreenImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 20,
    color: 'white',
  },
});
