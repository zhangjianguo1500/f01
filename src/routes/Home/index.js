//import HomeView from './components/HomeView'
import { injectReducer } from '../../lib/store/reducers'
export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const HomeView = require('./components/HomeView').default

      const scheduleView=require('../../components/Schedule').default
      // const reducer = require('./modules/counter').default
      const scheduleReducer=require('../../components/Schedule/modules/scheduleModules').default
      console.log(scheduleReducer);
      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'ScheduleViewer', reducer:scheduleReducer });

      /*  Return getComponent   */
      cb(null, HomeView);
      cb(null,scheduleView);
    /* Webpack named bundle   */
    }, 'home')
  }
})