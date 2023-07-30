import React, {FC} from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import {Formik, FormikValues} from 'formik';
import {NavigationProp} from '@react-navigation/native';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {RootStackList, Screens} from '../../navigation';
import {BUTTONWIDTH, Button} from '../../components/Button';
import {IS_REQUIRED, MIN_LONG, NEED_VALID_EMAIL} from '../../utils/constants';

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
          email: Yup.string().email(NEED_VALID_EMAIL).required(IS_REQUIRED),
          password: Yup.string().min(6, MIN_LONG).required(IS_REQUIRED),
        })}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <>
            <View style={styles.inputBlock}>
              <TextInput
                style={styles.input}
                placeholder="Почта"
                onChangeText={handleChange('email')}
                value={values.email}
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Пароль"
                onChangeText={handleChange('password')}
                value={values.password}
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
            </View>
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
    height: 60,
    borderRadius: 50,
    marginBottom: 15,
    marginVertical: 10,
    width: BUTTONWIDTH,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#DEE2E5',
  },
  inputBlock: {
    marginBottom: 40,
  },
  error: {
    color: 'red',
    // marginBottom: 5,
    marginLeft: 5,
  },
});
