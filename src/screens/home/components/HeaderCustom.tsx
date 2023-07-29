import React, {FC} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
  title: string;
  onBackPress(): void;
}

export const CustomHeader: FC<Props> = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Text style={styles.backButtonText}>&lt; Выйти</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E41E4E',
  },
  backButton: {
    left: 16,
    padding: 8,
    position: 'absolute',
  },
  backButtonText: {
    fontSize: 16,
    color: 'white',
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
