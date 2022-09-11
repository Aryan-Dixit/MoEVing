import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={{ backgroundColor: 'white'}} source={require('../assets/icons/Splash.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100%'
    }
  });

export default SplashScreen;