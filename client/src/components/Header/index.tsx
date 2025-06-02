import * as S from "./Header.styled";

function Header() {
  return (
    <S.Header>
      <S.HeaderTitleWrapper>
        <S.HeaderTitle>
          <strong>VIVORA</strong>
        </S.HeaderTitle>
        {/* <S.HeaderSubTitle>
            Figurehead <strong>Kim Hyejun</strong>
          </S.HeaderSubTitle> */}
        <S.HeaderButtonWrapper>
          <S.HeaderButton>마이페이지</S.HeaderButton>
          <S.HeaderButton>장바구니</S.HeaderButton>
        </S.HeaderButtonWrapper>
      </S.HeaderTitleWrapper>
    </S.Header>
  );
}

export default Header;
