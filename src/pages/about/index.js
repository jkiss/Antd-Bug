/*
 * @Author: Mr.B 
 * @Date: 2017-12-08 13:36:43 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-10-30 13:51:13
 */
'use strict'; 

// com
import Article from './Article'

class About extends React.Component {
    render() {
        return (
            <div>
                <Article/>
            </div>
        );
    }
}

ReactDOM.render(<About /> , document.getElementById('app'));