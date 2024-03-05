import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../config/firebase';

export default function SignUpScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handelSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigation.navigate('HomeScreen', {name: 'HomeScreen'});
      } catch (err) {
        console.log('got Err', err.message);
      }
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 16,
      }}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          color: 'black',
          marginBottom: 15,
        }}>
        SignUp
      </Text>
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          marginBottom: 5,
        }}
        value="Suresh Das"
        placeholder="Name"
      />
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          marginBottom: 5,
        }}
        value={email}
        onChangeText={value => setEmail(value)}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          marginBottom: 5,
        }}
        value={password}
        onChangeText={value => setPassword(value)}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button
        style={{
          borderRadius: 5,
        }}
        onPress={handelSubmit}
        title="SignUp"
      />
    </View>
  );
}
