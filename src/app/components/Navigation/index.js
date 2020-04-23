import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../../config/routes';

const Stack = createStackNavigator();

const Navigation = () => {
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

export default Navigation;
