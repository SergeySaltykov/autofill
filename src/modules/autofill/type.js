// @flow

export type TCatalog = {||};

export type TAutofillState = {|
    data: TCatalog[],
    error: Object,
    filter: TCatalog[],
    isLoading: boolean,
|};
