import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const Home = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [refreshing, setRefresing] = useState(false);

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

  const handleLoadMore = () => {
    if (data?.next) {
      setRefresing(true);
      fetch(data.next)
        .then((response) => response.json())
        .then((pokemon) => {
          setData({
            ...data,
            next: pokemon.next,
            count: pokemon.count,
            previous: pokemon.previous,
            results: [
              ...data.results,
              ...pokemon.results,
            ]

          });
          setRefresing(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  return (
    <View style={styles.container}>
      {
        data &&
        <FlatList
          contentContainerStyle={styles.flatContainer}
          data={data.results}
          ListHeaderComponent={() => <Text style={styles.title}>Lista de Pokemons</Text>}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => goToPokemon(item.name)}
            >
              <Text style={styles.pokemon}>{item.name}</Text>
            </TouchableOpacity>
          )}
          ListFooterComponent={() => <Text>Loading...</Text>}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          refreshing={refreshing}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    flexDirection: 'column',
  },
  flatContainer: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
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

