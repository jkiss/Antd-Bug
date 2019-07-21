/*
 * @Author: Nokey 
 * @Date: 2019-02-09 15:12:14 
 * @Last Modified by:   Mr.B 
 * @Last Modified time: 2019-02-09 15:12:14 
 */
'use strict'; 

function app(state = {
    show: false
}, action) {
    switch (action.type) {
        case 'SHOW_VIDEO_360':
            return Object.assign({}, state, {
                show: true
            })

        case 'HIDE_VIDEO_360':
            return Object.assign({}, state, {
                show: false
            })

        default:
            return state
    }
}

export default app