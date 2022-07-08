import { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

interface BaseButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
}

export const BaseButton = ({
  onClick,
  children,
  className,
}: BaseButtonProps) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  outline: none;
  border: none;
  color: inherit;
  cursor: pointer;
`;
