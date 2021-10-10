import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  console.log(displayedValue)
  return (
    <SelectWrapper>
      {displayedValue}
      <Label htmlFor={label}>
        <Icon size="24" id="chevron-down"></Icon>
      </Label>
    <SelectOrg id={label} value={value} onChange={onChange}>
      {children}
    </SelectOrg>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  display: inline-block;
  border: none;
  position: relative;
  width: 100%;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  max-width: fit-content;
  padding: 12px 16px;
  border-radius: 8px;

  &:focus-within{
    outline: 2px solid;
    outline: 2px auto -webkit-focus-ring-color;
  }

  &:hover{
    color: ${COLORS.black};
  }
`

const SelectOrg = styled.select`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const Label = styled.label`
  color: ${COLORS.grey50};
  display: inline-block;
  vertical-align: middle;
  margin-left: 24px;
`

export default Select;
