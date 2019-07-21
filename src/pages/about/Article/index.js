/*
 * @Author: Nokey 
 * @Date: 2018-10-30 13:49:17 
 * @Last Modified by:   Mr.B 
 * @Last Modified time: 2018-10-30 13:49:17 
 */
'use strict'; 

import React, { Component } from 'react';

// Style
import classNames from 'classnames/bind'
import styles from './css'
let _s = classNames.bind(styles)

class Article extends Component {
    render() {
        return (
            <div>
                <h1 className={_s('h1')}>About page</h1>
            </div>
        );
    }
}

export default Article;