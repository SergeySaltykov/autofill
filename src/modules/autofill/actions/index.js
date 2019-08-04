// @flow
import { createAction } from 'redux-act';

import type { TDispatch, TGetState } from 'app/types';
const catalogListLoad = createAction('Catalog list load');
const catalogListSuccess = createAction('Catalog list load success');
const catalogListFail = createAction('Catalog list load fail');

function getCatalogList() {
    return async (dispatch: TDispatch, getState: TGetState) => {
        dispatch(catalogListLoad());

        try {
            /*TODO можно прокидывать searchText через query
            *  Например: url = 'host/api?query=${searchText}'*/
            const { data } = await fetch('/api/catalog.json').then(r => r.json());
            dispatch(catalogListSuccess(data));
        } catch (error) {
            dispatch(catalogListFail());

            throw error;
        }
    };
}


export {
    catalogListFail,
    catalogListLoad,
    catalogListSuccess,
    getCatalogList,
};
