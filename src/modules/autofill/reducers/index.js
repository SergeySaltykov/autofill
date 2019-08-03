// @flow
import { createReducer } from 'redux-act';
import {
    catalogListLoad,
    catalogListSuccess,
    catalogListFail,
    updateList,
} from 'modules/autofill/actions';
import type{ TCatalog, TAutofillState } from 'modules/autofill/type';
import type { TState } from 'app/types';


const initialState: TAutofillState = {
    data: [],
    filter: [],
    error: {},
    isLoading: false,
};

const autofill = createReducer({
    [catalogListLoad]: (state: TAutofillState): TAutofillState => ({
        ...state,
        isLoading: true,
    }),
    [catalogListSuccess]: (state: TState, payload: TCatalog[]): TAutofillState => ({
        ...state,
        data: payload,
        filter: payload,
        isLoading: false,
    }),
    [catalogListFail]: (state: TState, error: Object): TAutofillState => ({
        ...state,
        error,
        isLoading: false,
    }),
    [updateList]: (state: TState, filter: TCatalog[]): TAutofillState => ({
        ...state,
        filter,
    }),
}, initialState);

export default autofill;
