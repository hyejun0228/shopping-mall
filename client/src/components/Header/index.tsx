import * as S from './Header.styled';
import HamburgerIcon from '@/assets/svg/hamburger.svg?react';
import ShoppingBagIcon from '@/assets/svg/shopping-bag.svg?react';
import SearchIcon from '@/assets/svg/search.svg?react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../utils/hooks/useAuth';

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isAuth } = useAuth();
  return (
    <S.Header>
      <S.HeaderItemWrapper>
        <S.HeaderButtonWrapper>
          <S.HeaderButton
            onClick={() => {
              navigate('/mypage');
            }}
          >
            마이페이지
          </S.HeaderButton>
          <S.HeaderButton>관심</S.HeaderButton>
          <S.HeaderButton>알림</S.HeaderButton>
          <S.HeaderButton
            onClick={() => {
              if (isLoggedIn) {
                setIsLoggedIn(false);
                navigate('/');
              } else {
                navigate('/auth/login');
              }
            }}
          >
            {isAuth ? '로그아웃' : '로그인'}
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
