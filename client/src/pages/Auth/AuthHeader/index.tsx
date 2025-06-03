import ChevronLeftIcon from '@/assets/svg/chevron-left.svg?react';
import * as S from './AuthHeader.styled';
import { useNavigate } from 'react-router-dom';

function AuthHeader() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <S.Header>
      <S.ButtonWrapper type="button" onClick={handleBackClick}>
        <ChevronLeftIcon />
      </S.ButtonWrapper>
    </S.Header>
  );
}

export default AuthHeader;
