import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { navigate } from '../../config/rootNavigation';

const Evolutions = ({ specie, evolutions }) => {
  const goToPokemon = (query) => navigate('Search', { query });

  return (
    <View style={styles.evolutionContainer}>
      <Text style={styles.title}>Evolutions</Text>
      <View style={styles.evolutions}>
        <TouchableOpacity
          onPress={() => goToPokemon(specie.name)}
        >
          <Text style={styles.searchButton}>{specie.name}</Text>
        </TouchableOpacity>
        {
          evolutions.map(({ species, evolves_to }, i) => {
            return (
              <View key={ i }>
                <TouchableOpacity
                  onPress={() => goToPokemon(species.name)}
                >
                  <Text style={styles.searchButton}>{species.name}</Text>
                </TouchableOpacity>
                {
                  evolves_to.length &&
                    <TouchableOpacity
                      onPress={() => goToPokemon(evolves_to[0].species.name)}
                    >
                      <Text style={styles.searchButton}>{evolves_to[0].species.name}</Text>
                    </TouchableOpacity>
                }
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  evolutionContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#616161',
    marginBottom: 5,
  },
  searchButton: {
    color: 'lightblue',
    marginBottom: 5,
    paddingVertical: 10,
  }
});

export default Evolutions;
