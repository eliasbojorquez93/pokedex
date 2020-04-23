import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const Home = ({ navigation }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((pokemon) => {
        setData(pokemon)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const goToPokemon = (query) => navigation.navigate('Search', { query });

  return (
    <ScrollView style={styles.container}>
      {
        data &&
        <FlatList
          horizontal
          contentContainerStyle={styles.flatContainer}
          data={data.results}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={ index }
              style={styles.button}
              onPress={() => goToPokemon(item.name)}
            >
              <Text style={styles.pokemon}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        // onEndReached={this._handleLoadMore}
        // onEndReachedThreshold={0.5}
        />
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    flexDirection: 'column',
  },
  flatContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  pokemon: {
    textAlign: 'center',
    fontSize: 16,
  }
});

export default Home;

