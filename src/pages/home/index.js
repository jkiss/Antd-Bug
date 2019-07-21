/*
 * @Author: Nokey 
 * @Date: 2017-07-13 18:03:17 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2019-02-09 15:44:20
 */
'use strict';

// polyfill-base
import 'raf/polyfill'
import "@babel/polyfill"

// Plugins
import 'fullpage.js'

// Utils
import Util from 'utils'
import { setWxShare } from 'utils/wxShare'
import config from '../../../config'

// redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './reducer'
const store = createStore(appReducer)

// Style
import 'font-awesome.css'
import 'roboto-thin.styl'
import 'style/reset.styl'

// com
import { Slider } from 'antd'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Loading
            loading: true
        }

        this._app = null
        this.fullpage_sections = null
    }

    componentDidMount() {
        console.log('%c' + 'CGTN', 'font-family: "courier new"; color:#000; font-size:24px; font-weight:bold; text-shadow:0 0 6px #22ff22;');

        let _me = this


        /**
         * Config
         */
        _me._app = $('#app')
        
    }
    
    render() {
        return (
            <section>
                <Slider />
            </section>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)

// if (module.hot) {
//     module.hot.accept('./Page1', function() {
//         console.log('Accepting the updated Page1 module!')

//         // TODO: css hot load is ok, but not component
//         // Page1.render()
//     })
// }