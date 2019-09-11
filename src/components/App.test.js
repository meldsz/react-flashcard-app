import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('renders `flash-card-pro` title', () => {
        expect(app.find('h1').text()).toEqual('FlashCardPro');
    });

    it('renders Stacklist', () => {
        expect(app.find('Connect(StackList)').exists()).toBe(true);
    });

    it('renders a link to Create new Stack', () => {
        expect(app.find('Link h2').text()).toEqual('Create a new Stack');
    });
});