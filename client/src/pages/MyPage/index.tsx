import * as S from './MyPage.styled';
import { useState } from 'react';
import OrderHistoryPage from './OrderHistoryPage';
import WishListPage from './WishListPage';

function MyPage() {
  const [selectedMenu, setSelectedMenu] = useState('구매 내역');

  return (
    <S.Container>
      <S.SectionWrapper>
        <S.ListSection>
          <S.Title>마이페이지</S.Title>
          <S.SubTitle>쇼핑 정보</S.SubTitle>
          <S.ItemTitle onClick={() => setSelectedMenu('구매 내역')}>구매 내역</S.ItemTitle>
          <S.ItemTitle onClick={() => setSelectedMenu('관심 상품')}>관심 상품</S.ItemTitle>
          <S.ItemTitle onClick={() => setSelectedMenu('리뷰 쓰기')}>리뷰 쓰기</S.ItemTitle>
          <S.SubTitle>내 정보</S.SubTitle>
          <S.ItemTitle onClick={() => setSelectedMenu('로그인 정보')}>로그인 정보</S.ItemTitle>
          <S.ItemTitle onClick={() => setSelectedMenu('주소록')}>주소록</S.ItemTitle>
          <S.ItemTitle onClick={() => setSelectedMenu('결제 정보')}>결제 정보</S.ItemTitle>
        </S.ListSection>
        <S.ContentSection>
          {selectedMenu === '구매 내역' && <OrderHistoryPage />}
          {selectedMenu === '관심 상품' && <WishListPage />}
        </S.ContentSection>
      </S.SectionWrapper>
    </S.Container>
  );
}

export default MyPage;
