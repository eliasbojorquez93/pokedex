import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const tenPercent = (screenHeight / 100) * 10;

const TopBar = () => (
  <View style={styles.topContainer}>
    <View style={styles.middleTop} />
    <View style={styles.bottom}>
      <View style={styles.middleBottom} />
      <View style={styles.triangle} />
    </View>
    <View style={styles.reader} />
    <View style={styles.red} />
    <View style={styles.yellow} />
    <View style={styles.green} />
  </View >
)

const styles = StyleSheet.create({
  topContainer: {
    width: '100%',
    height: '10%',
  },
  middleTop: {
    width: '100%',
    height: '50%',
    backgroundColor: '#9D2435',
  },
  bottom: {
    height: '50%',
    flexDirection: 'row',
    width: '100%',
  },
  middleBottom: {
    width: '50%',
    height: '100%',
    backgroundColor: '#9D2435',
  },
  triangle: {
    width: tenPercent,
    height: tenPercent,
    backgroundColor: '#9D2435',
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
    left: '50%',
    marginLeft: -(tenPercent / 2),
    marginTop: -(tenPercent / 2),
  },
  reader: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'dodgerblue',
    position: 'absolute',
    top: '50%',
    marginTop: -20,
    left: 20,
  },
  red: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'red',
    position: 'absolute',
    top: '50%',
    marginTop: -7,
    left: 70,
  },
  yellow: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'yellow',
    position: 'absolute',
    top: '50%',
    marginTop: -7,
    left: 90,
  },
  green: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'green',
    position: 'absolute',
    top: '50%',
    marginTop: -7,
    left: 110,
  },
})

export default TopBar;