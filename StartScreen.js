import React from 'react';
import { View, Button } from 'react-native';
import Quote from './Quote';

const { quotes } = require('./quotes.json');

class StartScreen extends React.Component {

  static navigationOptions = {
    title: 'Home'
  };

  render() {
    const quote = quotes[Math.floor(Math.random()*quotes.length)];
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Quote quoteText={quote.text} quoteSource={quote.source} />
      </View>
    )
  }
}

export default StartScreen;