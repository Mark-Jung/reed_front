import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../config/route';

const INITIAL_STATE = AppNavigator.router.getStateForAction(NavigationActions.navigate({
  routeName: 'HomeNav'
}));

export default function reducer(state = INITIAL_STATE, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}