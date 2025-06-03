import * as S from './Header.styled';
import HamburgerIcon from '@/assets/svg/hamburger.svg?react';
import ShoppingBagIcon from '@/assets/svg/shopping-bag.svg?react';
import SearchIcon from '@/assets/svg/search.svg?react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../stores/useUserStore';

function Header() {
  const navigate = useNavigate();
  const userId = useUserStore((state) => state.userId);
  const logout = useUserStore((state) => state.logout);

  const handleAuthClick = () => {
    if (userId) {
      logout();
      navigate('/');
    } else {
      navigate('/auth/login');
    }
  };

  return (
    <S.Header>
      <S.HeaderItemWrapper>
        <S.HeaderButtonWrapper>
          <S.HeaderButton onClick={() => navigate('/mypage')}>마이페이지</S.HeaderButton>
          <S.HeaderButton>관심</S.HeaderButton>
          <S.HeaderButton>알림</S.HeaderButton>
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
          <SearchIcon />
          <ShoppingBagIcon />
          <HamburgerIcon />
        </S.IconWrapper>
      </S.HeaderTitleWrapper>
    </S.Header>
  );
}

export default Header;
