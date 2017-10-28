import {StackNavigator} from 'react-navigation';
import HomePage from '../pages/Home.page';

const Router = StackNavigator({
  home: {
    screen: HomePage,
    navigationOptions: {
      title: 'Start taking notes',
    }
  }
});

export default Router;
