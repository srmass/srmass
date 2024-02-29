import {Button, View, Text} from 'react-native';
import React from 'react';

export default function SplashScreen({navigation}) {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', backgroundColor: 'seagreen'}}>
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
