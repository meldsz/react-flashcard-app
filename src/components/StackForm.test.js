import React from 'react';
import { shallow } from 'enzyme';
import { StackForm } from './StackForm';

const changeTitle = 'change title';
const changePrompt = 'change prompt';
const changeAnswer = 'change answer';

describe('StackForm', () => {
    const stackForm = shallow(<StackForm />);

    it('renders the page title', () => {
        expect(stackForm.find('h1').text()).toEqual('Create a New Stack');
    });

    it('renders a link to home', () => {
        expect(stackForm.find('Link h4').text()).toEqual('Home');
    });

    it('renders a form component', () => {
        expect(stackForm.find('Form').exists()).toBe(true);
    });

    it('renders a button Add card', () => {
        expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card');
    });

    it('renders a button to Save card', () => {
        expect(stackForm.find('Button').at(1).props().children).toEqual('Save and Add Stack');
    });

    describe("updating the title", () => {
        beforeEach(() => {
            stackForm.find('FormControl').simulate('change', { target: { value: changeTitle } });
        });


        it('updates the title in its state', () => {
            expect(stackForm.state().title).toEqual(changeTitle);
        });
    });

    describe('add card', () => {

        beforeEach(() => {
            stackForm.find('Button').at(0).simulate('click');
        });

        afterEach(() => {
            stackForm.setState({ cards: [] });
        });

        it('render prompt and answer formgroup', () => {
            expect(stackForm.find('FormControl').at(1).exists()).toBe(true);
            expect(stackForm.find('FormControl').at(2).exists()).toBe(true);
        });

        it('add a new card to the state', () => {
            expect(stackForm.state().cards.length).toEqual(1);
        });

        describe('updating prompt and answer', () => {
            beforeEach(() => {
                stackForm.find('FormControl').at(1).simulate('change', { target: { value: changePrompt } });
                stackForm.find('FormControl').at(2).simulate('change', { target: { value: changeAnswer } });
            });

            it('check prompt and answer in the state', () => {
                expect(stackForm.state().cards[0].prompt).toEqual(changePrompt);
                expect(stackForm.state().cards[0].answer).toEqual(changeAnswer);
            });
        });

    });
});