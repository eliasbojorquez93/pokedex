import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { POKEMON_DETAILS } from '../../graphql/queries';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text>Quesoooo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;

