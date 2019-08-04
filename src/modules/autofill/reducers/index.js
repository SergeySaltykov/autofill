// @flow
import { createReducer } from 'redux-act';
import {
    catalogListLoad,
    catalogListSuccess,
    catalogListFail,
} from 'modules/autofill/actions';
import type{ TCatalog, TAutofillState } from 'modules/autofill/type';
import type { TState } from 'app/types';


const initialState: TAutofillState = {
    data: [],
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
        isLoading: false,
    }),
    [catalogListFail]: (state: TState, error: Object): TAutofillState => ({
        ...state,
        error,
        isLoading: false,
    }),
}, initialState);

export default autofill;
