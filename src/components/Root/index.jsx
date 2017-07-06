import React, ***REMOVED*** Component ***REMOVED*** from 'react'
import ***REMOVED*** Provider ***REMOVED*** from 'react-redux'
import PropTypes from 'prop-types'

import router from '../../router'


export default class Root extends Component ***REMOVED***
    static propTypes = ***REMOVED***
        store: PropTypes.object.isrequired,
        history: PropTypes.object.isRequired,
    ***REMOVED***

    render() ***REMOVED***
        const ***REMOVED*** store, history ***REMOVED*** = this.props;

        return (
            <Provider store=***REMOVED***store***REMOVED***>
                ***REMOVED***router(history)***REMOVED***
            </Provider>
        )
    ***REMOVED***
***REMOVED***