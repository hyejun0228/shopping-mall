import * as S from './MyPage.styled';
import OrderHistoryPage from './OrderHistoryPage';
import WishListPage from './WishListPage';
import LoginInfoPage from './LoginInfoPage';
import { useSearchParams } from 'react-router-dom';
import AddressPage from './AddressPage';
import useMediaQuery from '../../hooks/utils/useMediaQuery';

function MyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isMobile = useMediaQuery({ maxWidth: 860 });

  const selectedMenu = searchParams.get('menu') || '구매 내역';

  const onMenuClick = (menu: string) => {
    setSearchParams({ menu });
  };

  return (
    <S.Container isMobile={isMobile}>
      <S.SectionWrapper isMobile={isMobile}>
        <S.ListSection isMobile={isMobile}>
          <S.Title isMobile={isMobile}>마이페이지</S.Title>
          <S.SubTitle isMobile={isMobile}>쇼핑 정보</S.SubTitle>
          <S.ItemTitle
            isMobile={isMobile}
            onClick={() => onMenuClick('구매 내역')}
            $active={selectedMenu === '구매 내역'}
          >
            구매 내역
          </S.ItemTitle>
          <S.ItemTitle
            isMobile={isMobile}
            onClick={() => onMenuClick('관심 상품')}
            $active={selectedMenu === '관심 상품'}
          >
            관심 상품
          </S.ItemTitle>
          <S.SubTitle isMobile={isMobile}>내 정보</S.SubTitle>
          <S.ItemTitle
            isMobile={isMobile}
            onClick={() => onMenuClick('로그인 정보')}
            $active={selectedMenu === '로그인 정보'}
          >
            로그인 정보
          </S.ItemTitle>
          <S.ItemTitle
            isMobile={isMobile}
            onClick={() => onMenuClick('주소록')}
            $active={selectedMenu === '주소록'}
          >
            주소록
          </S.ItemTitle>
        </S.ListSection>
        <S.ContentSection>
          {selectedMenu === '구매 내역' && <OrderHistoryPage />}
          {selectedMenu === '관심 상품' && <WishListPage />}
          {selectedMenu === '리뷰 쓰기' && <div>리뷰 쓰기 페이지</div>}
          {selectedMenu === '로그인 정보' && <LoginInfoPage />}
          {selectedMenu === '주소록' && <AddressPage />}
        </S.ContentSection>
      </S.SectionWrapper>
    </S.Container>
  );
}

export default MyPage;
