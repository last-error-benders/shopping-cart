import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import Cart from '../components/Cart';

describe('Cart', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Cart
        items={[]}
        onCheckoutClick={jest.fn()}
      />
    );
  });

  it('should have 0 items in cart', () => {
    expect(
      wrapper.containsMatchingElement(<p>Total: $0</p>)
    ).toBe(true);
  });
});
