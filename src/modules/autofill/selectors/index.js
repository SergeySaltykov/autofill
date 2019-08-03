import { autofillModule as moduleName } from 'app/reducer';
import { TState } from 'app/types';
import type { TCatalog } from 'modules/autofill/type';

function selectorCatalogList(state: TState): TCatalog[] {
    return state[moduleName].data;
}


export {
    selectorCatalogList,
}
