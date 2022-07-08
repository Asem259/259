import { useRef, Dispatch, SetStateAction, ReactNode } from 'react';
import styled from 'styled-components';
import { useOnClickOutside } from 'usehooks-ts';

import { Flex } from './Flex';

interface BaseMenuProps {
  children: ReactNode;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  menuButton: ReactNode;
}

export const BaseMenu = ({
  children,
  setOpen,
  open,
  menuButton,
}: BaseMenuProps) => {
  const ref = useRef(null);

  const handleClose = (e: MouseEvent) => {
    setOpen(false);
  };

  useOnClickOutside(ref, handleClose);

  return (
    <MenuContainer gap='xs' direction='column' ref={ref}>
      {menuButton}
      {open && <List>{children}</List>}
    </MenuContainer>
  );
};

const MenuContainer = styled(Flex)`
  position: relative;
  max-width: 320px;
  border-radius: ${(props) => props.theme.borderRadius.md};
`;

const List = styled.ul`
  ${(props) => props.theme.styles.center};
  padding: ${(props) => props.theme.spacing.sm + ' 0'};
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background.dark};
  width: fit-content;
  border-radius: ${(props) => props.theme.borderRadius.md};
`;
