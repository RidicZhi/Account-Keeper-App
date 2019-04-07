import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import AccountSummary from '../AccountSummary';

const props = {
  income: 1000,
  outcome: 2000,
}

describe('test AccountSummary component', () => {
  it('component should render correct income and outcome number', () => {
    const wrapper = shallow(<AccountSummary {...props} />)
    expect(wrapper.find('.income span').text()*1).toEqual(1000)
    expect(wrapper.find('.outcome span').text()*1).toEqual(2000)
  })
})