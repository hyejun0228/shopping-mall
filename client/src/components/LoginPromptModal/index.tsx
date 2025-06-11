import * as S from './LoginPromptModal.styled';
import { useNavigate } from 'react-router-dom';

interface Props {
  onClose: () => void;
}

const LoginPromptModal = ({ onClose }: Props) => {
  const navigate = useNavigate();
  return (
    <S.Overlay>
      <S.ModalBox>
        <S.Title>로그인이 필요한 기능입니다. </S.Title>
        <S.ButtonWrapper>
          <S.Button onClick={onClose}>취소</S.Button>
          <S.LoginButton onClick={() => navigate('/auth/login')}>로그인 하러가기</S.LoginButton>
        </S.ButtonWrapper>
      </S.ModalBox>
    </S.Overlay>
  );
};

export default LoginPromptModal;
