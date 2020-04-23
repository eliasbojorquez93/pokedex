import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import ROUTES from '../../config/routes';
import { navigationRef, isMountedRef } from '../../config/rootNavigation';
import TopBar from '../TopBar';
import BottomBar from '../BottomBar';

const Stack = createStackNavigator();

const Navigation = () => {
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          {
            ROUTES.map(
              ({ name, component }) => <Stack.Screen name={name} component={component} key={name} />
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
      <BottomBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  }
});

export default Navigation;
