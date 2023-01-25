import { BackButton } from './styles';
import { useRouter } from 'next/router';

export const GoBackButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return <BackButton onClick={handleClick}>{'<'}</BackButton>;
};
