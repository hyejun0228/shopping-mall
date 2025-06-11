import * as S from './Header.styled';
import ShoppingBagIcon from '@/assets/svg/shopping-bag.svg?react';
import SearchIcon from '@/assets/svg/search.svg?react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../hooks/stores/useUserStore';
import LoginPromptModal from '../../components/LoginPromptModal';
import { useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const userId = useUserStore((state) => state.userId);
  const logout = useUserStore((state) => state.logout);
  const [showModal, setShowModal] = useState(false);

  const handleAuthClick = () => {
    if (userId) {
      logout();
      navigate('/');
    } else {
      navigate('/auth/login');
    }
  };

  const goToWishList = () => {
    if (!userId) {
      setShowModal(true);
      return;
    }
    navigate('/mypage?menu=관심 상품');
  };

  const goToCart = () => {
    if (!userId) {
      setShowModal(true);
      return;
    }
    navigate('/cart');
  };

  const goToSearch = () => {
    if (!userId) {
      setShowModal(true);
      return;
    }
    navigate('/search');
  };

  const goToMyPage = () => {
    if (!userId) {
      setShowModal(true);
      return;
    }
    navigate('/mypage');
  };

  return (
    <S.Header>
      <S.HeaderItemWrapper>
        <S.HeaderButtonWrapper>
          <S.HeaderButton onClick={goToMyPage}>마이페이지</S.HeaderButton>
          <S.HeaderButton onClick={goToWishList}>관심</S.HeaderButton>
          <S.HeaderButton onClick={handleAuthClick}>
            {userId ? '로그아웃' : '로그인'}
          </S.HeaderButton>
        </S.HeaderButtonWrapper>
      </S.HeaderItemWrapper>

      <S.HeaderTitleWrapper>
        <S.HeaderTitle onClick={() => navigate('/')}>
          <strong>VIVORA</strong>
        </S.HeaderTitle>
        <S.IconWrapper>
          <S.IconButton onClick={goToSearch} type="button">
            <SearchIcon />
          </S.IconButton>
          <S.IconButton onClick={goToCart} type="button">
            <ShoppingBagIcon />
          </S.IconButton>{' '}
        </S.IconWrapper>
      </S.HeaderTitleWrapper>
      {showModal && <LoginPromptModal onClose={() => setShowModal(false)} />}
    </S.Header>
  );
}

export default Header;
