import * as S from './MainPage.styled';
import Poster from '../../components/Poster';
import ItemCategory from '../../components/ItemCategory';

function MainPage() {
  return (
    <>
      <S.MainWrapper>
        <Poster />
        <ItemCategory />
      </S.MainWrapper>
    </>
  );
}

export default MainPage;
