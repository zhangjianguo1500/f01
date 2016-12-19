/**
 * Created by user on 2016/12/16.
 */
export default (store) => ({
    path : 'email',
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
        /*  Webpack - use require callback to define
         dependencies for bundling   */
        const About = require('./components/EmailMenu').default
        // const reducer = require('./modules/counter').default

        /*  Add the reducer to the store on key 'counter'  */
        // injectReducer(store, { key: 'about', null })

        /*  Return getComponent   */
        cb(null, About)

        /* Webpack named bundle   */
    }, 'counter')
}
})
