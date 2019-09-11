import rootReducer from './index';
import { stack, stacks } from '../data/fixtures';
import * as actions from '../actions/index';

describe('reducers', () => {
    it('initial state', () => {
        expect(rootReducer({}, {})).toEqual({ stack: {}, stacks: [] });
    });

    it('sets main stack', () => {
        expect(rootReducer({}, { type: actions.SET_STACK, stack: stack }))
            .toEqual({ stack: stack, stacks: [] });
    });

    it('loads stack', () => {
        expect(rootReducer({}, { type: actions.LOAD_STACK, stacks: stacks }))
            .toEqual({ stack: {}, stacks: stacks });
    });

    it('add stack', () => {
        expect(rootReducer({}, { type: actions.ADD_STACK, stack: stack }))
            .toEqual({ stack: {}, stacks: [stack] });
    });
})