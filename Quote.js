import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const Quote = props => (
  <View>
    <Text>{props.quoteText}</Text>
    <Text>{props.quoteSource}</Text>
  </View>
);

Quote.propTypes = {
  quoteText: PropTypes.string.isRequired,
  quoteSource: PropTypes.string.isRequired,
};

export default Quote;
