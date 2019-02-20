import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Shop from '../components/Shop';
import Cart from '../components/Cart';

// it('has an h1 element', () => {
  // const wrapper = shallow(<Shop />);
  // expect(wrapper.find('h1').text()).toEqual('Welcome!');
// });
//
describe(`Shop`, () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Shop />);
  });

  describe(`Cart`, () => {
    beforeEach(() => {
      wrapper = shallow(<Cart />);
    });

    it(`has 0 items`, () => {
      console.log(wrapper.find('.cart'));
      expect(wrapper.find('.cart')[0].contains(<p>Total: $0</p>)).
        toBe(true);
    });

    it(`has 0 items`, () => {
      expect(wrapper.find('.cart')[0].contains(<p>Total: $0</p>)).
        toBe(true);
    });
  });
});
