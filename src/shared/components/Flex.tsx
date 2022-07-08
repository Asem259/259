import styled from 'styled-components';

interface BaseBtnProps {
  direction?: 'row' | 'column';
  justify?: 'between' | 'around' | 'center' | 'start' | 'end';
  items?: 'center' | 'start' | 'end';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
}

const options = {
  between: 'space-between',
  around: 'space-around',
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
};

export const Flex = styled.div<BaseBtnProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => options[props.justify || 'center']};
  align-items: ${(props) => options[props.items || 'center']};
  gap: ${(props) =>
    typeof props.gap === 'number'
      ? props.gap + 'px'
      : props.theme.spacing[props.gap || 'sm']};
`;
