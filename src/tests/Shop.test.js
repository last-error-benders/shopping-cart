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

  it(`.cart exists in Shop`, () => {
    console.log(wrapper.exists('.cart'));
    expect(wrapper.exists('.cart')).toBe(true);
  });

  it(`.cart exists in Shop`, () => {
    console.log(wrapper.exists('.add-to-cart'));
    expect(productWrapper.exists('.add-to-cart')).toBe(true);
  });

  // ask about this:  whyyy?
  // it(`add to cart button exists`, () => {
    // expect(wrapper.containsMatchingElement(<a class="button add-to-cart">Add to Cart</a>)).toBe(true);
  // });

  // ask about this:  whyyy?
  // describe(`Cart`, () => {
    // beforeEach(() => {
      // wrapper = shallow(<Cart />);
    // });

    // it(`please work`, () => {
      // console.log(wrapper.exists('.cart'));
      // expect(wrapper.exists('.cart')).toBe(true);
    // });
  // });
});
