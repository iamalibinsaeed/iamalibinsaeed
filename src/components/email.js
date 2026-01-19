import React from 'react';
import styled from 'styled-components';

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.slate};
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;

const Side = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 40px;
  z-index: 10;
  color: ${({ theme }) => theme.colors.lightSlate};

  @media (max-width: 1080px) {
    display: none;
  }
`;

const Email = () => (
    <Side orientation="right">
        <StyledLinkWrapper>
            <a href="mailto:iamalibinsaeed@gmail.com">iamalibinsaeed@gmail.com</a>
        </StyledLinkWrapper>
    </Side>
);

export default Email;
