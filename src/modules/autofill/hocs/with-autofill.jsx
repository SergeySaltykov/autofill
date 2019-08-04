import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getHocDisplayName} from 'modules/autofill/helpers';
import {getCatalogList} from 'modules/autofill/actions';
import {selectorCatalogList} from 'modules/autofill/selectors';

function mapStateToProps (state) {
    return {
        catalogList: selectorCatalogList(state),
    };
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        getCatalogList,
    }, dispatch);
}

function withAutofill (WrappedComponent) {
    class WithAutofill extends React.Component {
        handleRetrieveDataAsync = (inputCurrentValue) => {
            const {getCatalogList} = this.props;

            getCatalogList(inputCurrentValue);
        };


        render () {
            return <WrappedComponent {...this.props} retrieveDataAsync={this.handleRetrieveDataAsync} />;
        }
    }

    WithAutofill.displayName = getHocDisplayName(WithAutofill, WrappedComponent);

    return connect(mapStateToProps, mapDispatchToProps)(WithAutofill);
}

export {
    withAutofill,
};
