import {Button, View, Text, Alert} from 'react-native';
import React from 'react';

export default function SplashScreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'seagreen'}}>
      <Text>SplashScreen</Text>
      <Button
        title="Go To Signin"
        onPress={() =>
          navigation.navigate('SignInScreen', {name: 'SignInScreen'})
        }
      />
    </View>
  );
}
