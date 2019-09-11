import * as actions from './index';
import { stack, stacks } from '../data/fixtures';

describe('actions', () => {

    it('creates action to set stack', () => {
        const expectedActions = { type: actions.SET_STACK, stack: stack };
        expect(actions.setStack(stack)).toEqual(expectedActions);
    });

    it('creates action to load stacks', () => {
        const expectedActions = { type: actions.LOAD_STACK, stacks: stacks };
        expect(actions.loadStack(stacks)).toEqual(expectedActions);
    });

    it('creates action to add stack', () => {
        const expectedActions = { type: actions.ADD_STACK, stack: stack };
        expect(actions.addStack(stack)).toEqual(expectedActions);
    })
});