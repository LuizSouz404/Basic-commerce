import { IconBaseProps, IconType } from 'react-icons';
import { Container } from './styles';

type ButtonProductProps = {
  title: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export function ButtonProduct({title, icon: Icon}: ButtonProductProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <strong>{title}</strong>
    </Container>
  )
}
