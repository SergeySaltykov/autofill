// @flow
import React from 'react';
import { connect } from 'react-redux';
import {Autofill} from 'modules/autofill/component/Autofill';

import { bindActionCreators, compose } from 'redux';
import type {TDispatch, TState} from 'app/types';
// import type { SyntheticInputEvent } from 'react';


type TProps = {
    // filter: TCatalog[],
    // getCatalogList: typeof getCatalogList,
};

function mapStateToProps(state: TState) {
    return {
    };
}

function mapDispatchToProps(dispatch: TDispatch) {
    return bindActionCreators({
    }, dispatch);
}

class AutofillContainers extends React.Component<TProps> {
    // componentDidMount() {
    //     const { getCatalogList } = this.props;
    //
    //     getCatalogList();
    // }

    // componentDidUpdate(nextProps: TProps) {}

    // handleChangeSearchName = (e: SyntheticInputEvent<HTMLInputElement>): void => {
    //     const { catalog, updateCatalog } = this.props;
    //     const currentValue = e.target.value.toLowerCase();
    //
    //     const filter = catalog.filter(user => user.name.toLowerCase().includes(currentValue));
    //
    //     updateCatalog(filter);
    // };

    render() {
        // const { catalog, filter } = this.props;
        const filter = ['black', 'white', 'green'];

        return (
            <div>
                <h1>Autocomlete demonstration</h1>
                <Autofill filter={filter}/>
            </div>
        );
    }
}

const AutofillContainersHOC =
    compose (
        connect(mapStateToProps, mapDispatchToProps),
    )
    (AutofillContainers);
export {
    AutofillContainersHOC as AutofillContainers,
};
