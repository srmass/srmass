import {View, Text, TextInput, Button, Alert} from 'react-native';
import React from 'react';

export default function SignInScreen() {
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
        SignIn
      </Text>
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          marginBottom: 5,
        }}
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
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button
        style={{
          borderRadius: 5,
        }}
        title="SignIn"
        onPress={() => Alert.alert('SignIn Button pressed')}
      />
    </View>
  );
}
