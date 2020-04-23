import 'react-native-gesture-handler';
import React from 'react';
import ApolloContainer from './src/app/api/ApolloProvider';
import Navigation from './src/app/components/Navigation';

const App = () => {
  return (
    <>
      <ApolloContainer children={<Navigation />} />
    </>
  );
};

export default App;
