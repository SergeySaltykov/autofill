import {
    catalogListLoad,
    catalogListSuccess,
    catalogListFail,
} from 'modules/autofill/actions';
import autofill from '../index';

describe('Autofill reducer', () => {
    const initialState = {
        data: [],
        error: {},
        isLoading: false,
    };

    it('Provides initial state', () => {
        expect(autofill()).toEqual(initialState);
    });

    it('Handles catalogListLoad action', () => {
        expect(autofill(initialState, catalogListLoad()))
            .toEqual(expect.objectContaining({
                ...initialState,
                isLoading: true,
            }));
    });

    it('Handles catalogListSuccess action', () => {
        const stateBefore = {
            ...initialState,
            data: ['1', '2', '3'],
        };

        expect(autofill(initialState, catalogListSuccess(['1', '2', '3'])))
            .toEqual(expect.objectContaining({
                ...stateBefore,
            }));
    });

    it('Handles catalogListFail action', () => {
        expect(autofill(initialState, catalogListFail())).toEqual({ ...initialState });
    });
});
