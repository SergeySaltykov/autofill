// @flow
import { combineReducers } from 'redux';
import autofill from 'modules/autofill/reducers';

const autofillModule = 'moduleAutofill';

const rootReducer = combineReducers({
    [autofillModule]: autofill,
});

export {
    autofillModule,
    rootReducer,
};

export type TRootReducer = typeof rootReducer;
