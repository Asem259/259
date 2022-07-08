import { MouseEvent, MouseEventHandler, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import { IoMdArrowDropright } from 'react-icons/io';
import { IconType } from 'react-icons';

import { Flex } from './Flex';
import { BaseButton } from './BaseButton';

interface MenuItemProps {
  subMenu?: boolean;
  onClick: MouseEventHandler<HTMLLIElement>;
  icon?: IconType;
  text: string;
  children?: ReactNode;
}

export const MenuItem = ({
  onClick,
  subMenu,
  icon: Icon,
  text,
  children,
}: MenuItemProps) => {
  const [expand, setExpand] = useState(false);

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (subMenu) setExpand((pre) => !pre);
    else onClick;
  };

  return (
    <ItemContainer expand={expand}>
      <Item onClick={clickHandler} expand={expand}>
        <IconContainer>{Icon && <Icon size={18} />}</IconContainer>
        <Text justify='start'> {text}</Text>
        <ExpandContainer expand={expand}>
          {subMenu && <IoMdArrowDropright size={20} />}
        </ExpandContainer>
      </Item>
      {subMenu && expand && <SubMenu expand={expand}>{children}</SubMenu>}
    </ItemContainer>
  );
};

const ItemContainer = styled.li<{ expand: boolean }>`
  ${(props) => props.theme.styles.center};
  flex-direction: column;
  width: 100%;
  color: ${(props) => props.theme.colors.text.active};
  height: fit-content;

  border-radius: ${(props) => props.theme.borderRadius.md};
  background-color: ${(props) =>
    props.expand
      ? lighten(0.1, props.theme.colors.background.dark)
      : 'inherit'};
`;

const Item = styled(BaseButton)<{ expand: boolean }>`
  ${(props) => props.theme.styles.center};
  padding: ${(props) => props.theme.spacing.sm};
  width: 100%;
  height: ${(props) => props.theme.spacing.xl};
  background-color: inherit;
  &:hover {
    background-color: ${(props) =>
      lighten(0.2, props.theme.colors.background.dark)};
  }
  box-shadow: ${(props) => (props.expand ? props.theme.shadow.md : '')};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  cursor: pointer;
`;

const IconContainer = styled(Flex)`
  height: ${(props) => props.theme.spacing.xl};
  width: ${(props) => props.theme.spacing.xl};
`;

const ExpandContainer = styled(Flex)<{ expand: boolean }>`
  height: ${(props) => props.theme.spacing.xl};
  width: ${(props) => props.theme.spacing.xl};
  transform: ${(props) => (props.expand ? 'rotate(90deg)' : '')};
`;

const Text = styled(Flex)`
  flex-grow: 1;
  height: 100%;
  font-size: 1rem;
`;

const SubMenu = styled.ul<{ expand: boolean }>`
  ${(props) => props.theme.styles.center}
  flex-direction: column;
  width: 100%;
  background-color: ${(props) =>
    lighten(0.1, props.theme.colors.background.light)};
  transform: ${(props) => (props.expand ? 'scaleY(1)' : 'scaleY(0)')};
  overflow: hidden;
`;
