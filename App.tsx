import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/app/Navigators/StackNavigator';
import React, {useEffect, useState} from 'react';
import SplashScreen from './src/app/Screens/SplashScreen/SplashScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <SplashScreen /> : <StackNavigator />}
    </NavigationContainer>
  );
}

export default App;
