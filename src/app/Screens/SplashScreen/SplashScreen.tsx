import React from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  const closeSplashScreen = () => {
    navigation.navigate('HomeScreen' as never);
  };

  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animationProperties}
        source={require('../../../assets/splash-screen-animation.json')}
        autoPlay
        loop={false}
        speed={1.5}
        onAnimationFinish={closeSplashScreen}
      />
    </View>
  );
}
