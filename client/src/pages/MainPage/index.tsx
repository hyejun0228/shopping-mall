import * as S from './MainPage.styled';
import Poster from '../../components/Poster';
import Item from '../../components/Item';

function MainPage() {
  return (
    <>
      <S.MainWrapper>
        <Poster />
        <Item />
      </S.MainWrapper>
    </>
  );
}

export default MainPage;
