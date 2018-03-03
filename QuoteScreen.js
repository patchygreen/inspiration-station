import React from 'react';
import { View } from 'react-native';
import Quote from './Quote';

const { quotes } = require('./quotes.json');

class QuoteScreen extends React.Component {

  static navigationOptions = {
    title: 'Quotes'
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {quotes.map(function(quote, i){
          return <Quote quoteText={quote.text} quoteSource={quote.source} key={i}/>;
        })}
      </View>
    );
  }
}

export default QuoteScreen;