// @flow
import React from 'react';
import {Autofill} from 'modules/autofill/component/Autofill';
import {compose} from 'redux';
import {withAutofill} from 'modules/autofill/hocs/with-autofill';

type TProps = {
    catalogList: [string],
    retrieveDataAsync?: (string) => void,
    filter: [string],
};

class AutofillContainers extends React.Component<TProps> {
    static defaultProps = {
        filter: ['black', 'white', 'green', 'blue', 'grey', 'grey', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10'],
    };

    render() {
        const {retrieveDataAsync, filter, catalogList} = this.props;
        console.log(catalogList);
        return (
            <div>
                <h1>Autocomlete demonstration</h1>
                <Autofill
                    retrieveDataAsync={retrieveDataAsync}
                    // staticFilter={filter}
                    staticFilter={catalogList}
                />
            </div>
        );
    }
}

const decorator =
    compose(
        withAutofill,
    )
    (AutofillContainers);

export {
    decorator as AutofillContainers,
};
