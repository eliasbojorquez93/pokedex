import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from './src/app/config/routes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {
            ROUTES.map(
              ({ name, component }) => <Stack.Screen name={name} component={component} key={name} />
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
