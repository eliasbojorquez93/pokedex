import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

const Card = ({ pokemon }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.cardTitle}>{pokemon.name}</Text>
        {
          pokemon.types.map(({ type }, i) => (
            <Text style={styles.type} key={i}>{type.name}</Text>)
          )
        }
        <Text style={styles.experience}>{pokemon.base_experience} EXP</Text>
      </View>
      <View style={styles.cardInfo}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: pokemon.sprites.front_default,
            }}
          />
        </View>
        <View style={styles.abilitiesContainer}>
          <Text style={styles.abilitiesTitle}>Habilidades</Text>
          <View style={styles.abilities}>
          {
              pokemon.abilities.map(({ ability }, i) => (
                <Text style={styles.ability} key={i}>{ability.name}</Text>
              ))
            }
          </View>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: '5%',
    marginBottom: '5%',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F3',
  },
  cardTitle: {
    color: '#616161',
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 20,
  },
  type: {
    backgroundColor: '#FEFABC',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    color: '#CAA31C',
    fontSize: 11,
  },
  experience: {
    flex: 1,
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 12,
  },
  cardInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  imageContainer: {
    width: '40%',
    minHeight: '80%',
    backgroundColor: '#F3F3F3',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  abilitiesContainer: {
    flex: 1,
    marginLeft: 15,
  },
  abilitiesTitle: {
    color: '#616161',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  abilities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap',
  },
  ability: {
    backgroundColor: '#DCF9FF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    fontSize: 11,
    marginBottom: 7,
  }
});

export default Card;
