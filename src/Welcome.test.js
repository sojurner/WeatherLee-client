import React from 'react';
import { shallow, mount } from 'enzyme'
import Welcome from './Welcome';

describe('Welcome', () => {
    let wrapper;

    beforeEach( () => {
        // localStorage.clear();
        wrapper = shallow(<Welcome />);
    })

    it('shall exist', () => {
        expect(wrapper).toBeDefined();
    })

    it('shall render a welcome title', () => {
        expect(wrapper.find('h1').length).toEqual(1)
    })
})