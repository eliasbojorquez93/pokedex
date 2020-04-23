import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Description = ({ entries }) => (
  <View style={styles.textEntries}>
    <Text style={styles.description}>Descripción</Text>
    {
      entries.map(({ flavor_text, language }, i) => {
        if (language.name === 'es') {
          return (
            <Text style={styles.text} key={i}>{flavor_text.replace(/\n/g, '')}</Text>
          )
        }
      })
    }
  </View>
)

const styles = StyleSheet.create({
  textEntries: {
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
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#616161',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'justify',
  }
});

export default Description;

