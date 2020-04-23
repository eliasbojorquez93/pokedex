import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';

const Moves = ({ moves }) => (
  <View style={styles.movesContainer}>
    <Text style={styles.title}>Movimientos</Text>
    <View style={styles.moves}>
      {
        moves.map(({ move }, i) => <Text key={i} style={styles.move}>{move.name}</Text>)
      }
    </View>
  </View>
)

const styles = StyleSheet.create({
  movesContainer: {
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
    marginBottom: 15,
  },
  moves: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-between",
  },
  move: {
    backgroundColor: '#DCF9FF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    fontSize: 11,
    marginBottom: 7,
  }
});

export default Moves;
