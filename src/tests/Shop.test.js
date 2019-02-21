import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Shop from '../components/Shop';
import Cart from '../components/Cart';

describe(`Shop`, () => {
  let wrapper;
  // let cartWrapper; // adding another wrapper makes all tests fail

  beforeEach(() => {
    wrapper = shallow(<Shop />);
    // cartWrapper = shallow(<Cart />); // adding another wrapper makes all tests fail
  });

  // testing for class .cart wortks with `toBe`
  it(`.cart exists in Shop works with 'toBe'`, () => {
  console.log('cart exists in shop wrapper', wrapper.exists('.cart'));
  expect(wrapper.exists('.cart')).toBe(true);
  });

  it(`div exists in Shop works with 'toBe'`, () => {
  console.log('div exists in shop wrapper', wrapper.exists('.cart'));
  expect(wrapper.exists('div')).toBe(true);
  });

  // Q: Wy doesn't it work with using `to.equal`?
  // it(`.cart exists in Shop doesn't work with 'to.equal'`, () => {
  // console.log('cart exists in shop wrapper', wrapper.exists('.cart'));
  // expect(wrapper.exists('.cart')).to.equal(true);
  // });

  // testing for class with cartWrapper makes all tests fail
  // it(`.cart exists in *Cart* doesn't work`, () => {
    // console.log('cart exists in cartWrapper', cartWrapper.exists('.cart'));
    // expect(cartWrapper.exists('.cart')).toBe(true);
  // });

  // testing for h2 with cartWrapper makes all tests fail
  // it(`h2 exists in *Cart* doesn't work`, () => {
    // console.log('h2 exists in cartWrapper', cartWrapper.exists('h2'));
    // expect(cartWrapper.exists('h2')).toBe(true);
  // });

  describe(`Cart`, () => {
    let cartWrapper; // adding another wrapper makes all tests fail

    beforeEach(() => {
      cartWrapper = shallow(<Cart />);
    });

    // testing for class in Cart doesn't work
    it(`.cart exists in *Cart* doesn't work`, () => {
      console.log('cart exists in cartWrapper', cartWrapper.exists('.cart'));
      expect(cartWrapper.exists('.cart')).toBe(true);
    });

    // testing for h2 in Cart doesn't work
    it(`h2 exists in *Cart* doesn't work`, () => {
      console.log('h2 exists in cartWrapper', cartWrapper.exists('h2'));
      expect(cartWrapper.exists('h2')).toBe(true);
    });

  });
});
//
//-----------------------------------------------------------------------
// Extra test
// it(`.add-to-cart exists in Shop`, () => {
// console.log(wrapper.exists('.add-to-cart'));
// expect(wrapper.exists('.add-to-cart')).toBe(true);
// });

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
