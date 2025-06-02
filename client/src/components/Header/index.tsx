import * as S from "./Header.styled";
import HamburgerIcon from '@/assets/svg/hamburger.svg?react';
import ShoppingBagIcon from '@/assets/svg/shopping-bag.svg?react';
import SearchIcon from '@/assets/svg/search.svg?react';

function Header() {
  return (
    <S.Header>
      <S.HeaderItemWrapper>
        <S.HeaderButtonWrapper>
          <S.HeaderButton>마이페이지</S.HeaderButton>
          <S.HeaderButton>관심</S.HeaderButton>
          <S.HeaderButton>알림</S.HeaderButton>
          <S.HeaderButton>로그아웃</S.HeaderButton>
        </S.HeaderButtonWrapper>
      </S.HeaderItemWrapper>

      <S.HeaderTitleWrapper>
        <S.HeaderTitle>
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
