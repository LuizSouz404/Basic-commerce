import { IconBaseProps } from 'react-icons';
import { ButtonContainer } from './styles';

interface ButtonProductProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export function ButtonProduct({title, icon: Icon}: ButtonProductProps) {
  return (
    <ButtonContainer>
      {Icon && <Icon size={20} />}
      <strong>{title}</strong>
    </ButtonContainer>
  )
}
