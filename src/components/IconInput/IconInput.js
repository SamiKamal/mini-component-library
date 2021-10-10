import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--border': `1px solid ${COLORS.black}`,
    '--fontSize': 14/16 +'rem',
    '--width': '16',
    '--strokeWidth': '1'
  },
  large: {
    '--border': `2px solid ${COLORS.black}`,
    '--fontSize': 18/16 +'rem',
    '--width': '24',
    '--strokeWidth': '2'
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size]

  if (!styles){
    throw new Error('Unknown Size:' + size)
  }
  return (<>
    <InputWrapper style={styles} width={width}>
      <Label htmlFor={label}>
        <Icon size={styles['--width']} strokeWidth={styles['--strokeWidth']} id={icon}></Icon>
        <VisuallyHidden>{label}</VisuallyHidden>
      </Label>
      <TextInput placeholder={placeholder} id={label}/>
    </InputWrapper>
  </>);
};


const Label = styled.label`
  display: inline-block;
  margin-right: 4px;
  margin-bottom: 3px;
  color: ${COLORS.gray700};
  vertical-align: middle;
  `

const TextInput = styled.input`
  display: inline-block;
  max-width: 100%;
  width: calc(100% - 28px);
  border: none;
  font-size: var(--fontSize);
  color: ${COLORS.gray700};
  font-weight: bold;
  
  
  &::placeholder{
    color: ${COLORS.gray500};
    font-weight: normal;
  }
  
  &:focus{
    outline: none;
  }
  
  
  `
  const InputWrapper = styled.div`
    font-weight: 700;
    border-bottom: var(--border);
    font-size: var(--fontSize);
    max-width: ${p => p.width}px;
    padding-bottom: 2px;
  
    &:focus-within{
      outline: 2px solid;
      outline-offset: 2px;
    }
  
    &:hover{
      & ${TextInput}, & ${Label}{
        color: ${COLORS.black};
      }
    }
  
  `

export default IconInput;
