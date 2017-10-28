import {StackNavigator} from 'react-navigation';
import HomePage from '../pages/Home.page';
import AboutApp from '../components/About/AboutApp.component';

const Router = StackNavigator({
  home: {
    screen: HomePage,
    navigationOptions: {
      title: 'Start taking notes',
    }
  },
  about: {
    screen: AboutApp
  }
});

export default Router;
