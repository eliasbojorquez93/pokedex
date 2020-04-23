import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Card from '../../components/Card';
import Description from '../../components/Description';
import Evolutions from '../../components/Evolutions';
import Moves from '../../components/Moves/Index';
import { useQuery } from '@apollo/client';
import { POKEMON_DETAILS } from '../../graphql/queries';

const Search = ({ route }) => {
  const [entriesText, setEntriesText] = useState([]);
  let entries = [];
  const { query } = route.params;
  const { loading, error, data } = useQuery(POKEMON_DETAILS, {
    variables: {
      query
    }
  });

  useEffect(() => {
    if (!loading && !error) {
      data.search.flavor_text_entries.map(item => {
        if (item.language.name === 'es')
          entries.push(item)
      });
      setEntriesText(entries);
    }
  }, [loading]);

  return (
    <ScrollView style={styles.searchContainer}>
      {
        (!loading && !error) &&
        <View style={styles.elements}>
          <Card pokemon={data.search} />
          <Description entries={entriesText} />
          <Evolutions specie={data.search.species} evolutions={data.search.evolves_to} />
          <Moves moves={data.search.moves} />
        </View>
      }
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
  },
  elements: {
    padding: '5%',
  }
});

export default Search;
