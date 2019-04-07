import React from 'react';
import { shallow } from 'enzyme';
import RecordList from '../RecordList';
import Ionicon from "react-ionicons";
import { categories, records } from '../../containers/AccountKeeper';
import { JestEnvironment } from '@jest/environment';

const recordsWithCategory = records.map(record => {
  record.category = categories[record.cid];
  return record;
});

const props = {
  records: recordsWithCategory,
  onUpdateRecord: jest.fn(),
  onDeleteRecord: jest.fn(),
};

let wrapper;

describe('test RecordList component', () => {
  beforeEach(() => {
    wrapper = shallow(<RecordList {...props}/>)
  })
  it('should render the component to match snapshot',() => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should render correct record length', () => {
    expect(wrapper.find('.list-group-item').length).toEqual(recordsWithCategory.length)
  })
  it('should render correct icon and price for each record', () => {
    const iconList = wrapper.find('.list-group-item').first().find(Ionicon)
    expect(iconList.length).toEqual(3)
    expect(iconList.first().props().icon).toEqual(recordsWithCategory[0].category.iconName)
  })
  it('should trigger the correct function callbacks', () => {
    const firstRecord = wrapper.find('.list-group-item').first()
    firstRecord.find('a').first().simulate('click')
    expect(props.onUpdateRecord).toHaveBeenCalledWith(recordsWithCategory[0])
    firstRecord.find('a').last().simulate('click')
    expect(props.onDeleteRecord).toHaveBeenCalledWith(recordsWithCategory[0])
  })
})