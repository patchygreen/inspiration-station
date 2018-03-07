import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import StartScreen from './StartScreen';
import QuoteScreen from './QuoteScreen';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = TabNavigator(
  {
    Home: {
      screen: StartScreen,
    },
    Quotes: {
      screen: QuoteScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Quotes') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);

