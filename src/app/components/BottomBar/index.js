import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';
import { navigate } from '../../config/rootNavigation';

const BottomBar = () => {
  const [query, setQuery] = useState('');

  const goToSearch = () => {
    if (query.length !== null && query.length !== '') {
      navigate('Search', {
        query: query.toLowerCase(),
      });

      setQuery('');
    }
  };

  return (
    <View style={styles.searchInputContainer}>
      <TextInput
        style={styles.searchInput}
        onChangeText={query => setQuery(query)}
        value={query}
        placeholder="Search Pokemon"
      />
      <TouchableHighlight
        style={styles.searchButton}
        onPress={goToSearch}
      >
        <Image
          style={styles.searchIcon}
          source={require('../../../../public/imgs/search.png')}
        />
      </TouchableHighlight>
    </View>
  )
};

const styles = StyleSheet.create({
  searchInputContainer: {
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    borderTopColor: '#F3F3F3',
    borderTopWidth: 1,
  },
  searchButton: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#9D2435',
    top: -30,
    right: -50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: '25%',
    right: '50%',
    
  }
});

export default BottomBar;
