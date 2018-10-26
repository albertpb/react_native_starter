import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Reactotron from '../config/ReactotronConfig';

const middleware = applyMiddleware(thunk);

export default Reactotron.createStore(reducers, middleware);
