import React, { Component } from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import router from '../../router'


export default class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isrequired,
        history: PropTypes.object.isRequired,
    }

    render() {
        const { store, history } = this.props;

        return (
            <Provider store={store}>
                {router(history)}
            </Provider>
        )
    }
}