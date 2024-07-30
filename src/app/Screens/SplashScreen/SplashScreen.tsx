import React from 'react';
import {SafeAreaView, View, Text, useColorScheme} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  FadeOut,
  Easing,
  FadeInUp,
} from 'react-native-reanimated';
import styles from './style';
import SplashScreenLogo from '../../../assets/splash-screen-logo';

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

export default function SplashScreen() {
  const sv = useSharedValue(0);
  const scale = useSharedValue(1);
  const colorScheme = useColorScheme();

  const lightModeTextColor = '#000';
  const darkModeTextColor = '#fff';
  const textColor =
    colorScheme === 'dark' ? darkModeTextColor : lightModeTextColor;

  const scaleStyles = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  React.useEffect(() => {
    scale.value = withTiming(scale.value * 3, {duration: 1000});
    sv.value = withTiming(1, {duration, easing});
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Animated.View style={[styles.imageContainer, scaleStyles]}>
          <SplashScreenLogo />
        </Animated.View>
      </View>
      <View style={styles.textContainer}>
        <Animated.Text
          entering={FadeInUp.delay(1000)}
          exiting={FadeOut}
          style={styles.appTypeText}>
          To Do App
        </Animated.Text>
        <Animated.Text
          entering={FadeInUp.delay(1000)}
          exiting={FadeOut}
          style={[styles.appDeveloperNameText, {color: textColor}]}>
          Developed by Aurnab Paul
        </Animated.Text>
      </View>
    </SafeAreaView>
  );
}
