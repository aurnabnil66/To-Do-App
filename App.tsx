import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/app/Navigators/StackNavigator';
import React, {useEffect} from 'react';
import LottieSplashScreen from 'react-native-lottie-splash-screen';

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      LottieSplashScreen.hide(); // Hide the splash screen after 2.7 seconds
    }, 2700);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
