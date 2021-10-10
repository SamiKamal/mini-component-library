/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES ={
  small: {
    '--borderRadius': '4px',
    '--height': '8px'
  },
  medium: {
    '--borderRadius': '4px',
    '--height': '12px'
  },
  large: {
    '--borderRadius': '8px',
    '--height': '24px',
    '--padding': '4px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]

  if (!styles){
    throw new Error('Unknown size passed to ProgressBar ' + size)
  }

  console.log(value)
  return (
    <ProgressBarElem role="progressbar" aria-valuetext="Copying files... " style={styles} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar value={value}></Bar>
      </BarWrapper>
    </ProgressBarElem>
  );
};

const ProgressBarElem = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  padding: var(--padding);
    `

const Bar = styled.span`
    display: block;
    background-color: ${COLORS.primary};
    top: 0;
    left: 0;
    border-top-left-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
    width: ${p => p.value}%;
    height: 100%;
`
const BarWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  border-radius: var(--borderRadius);

`

export default ProgressBar;
