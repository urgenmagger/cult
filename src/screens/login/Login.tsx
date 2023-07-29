import React, {FC} from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import {Formik, FormikValues} from 'formik';
import {NavigationProp} from '@react-navigation/native';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {RootStackList, Screens} from '../../navigation';
import {BUTTONWIDTH, Button} from '../../components/Button';

interface Props {
  navigation: NavigationProp<RootStackList>;
}

export const Login: FC<Props> = ({navigation}) => {
  const handleGoHome = (email: string) => {
    navigation.navigate(Screens.Home, {email});
  };

  const handleLogin = async (values: FormikValues) => {
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email: values.email,
        password: values.password,
      });

      if (response.status === 200) {
        handleGoHome(values.email);
        console.log('Login successful!');
      }
    } catch (error: any) {
      console.error(
        'Login failed:',
        error.response?.data.error || 'Unknown error',
      );
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().min(6, 'Too Short!').required('Required'),
        })}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Button onPress={() => handleSubmit()} label="Войти" />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingVertical: 15,
    marginVertical: 10,
    backgroundColor: '#DEE2E5',
    borderRadius: 50,
    width: BUTTONWIDTH,
    height: 60,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
