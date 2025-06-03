import { useEffect, useState } from 'react';
import * as S from './LoginInfoPage.styled';

interface User {
  id: number;
  email: string;
  name: string;
}

function LoginInfoPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await fetch('http://localhost/server/router.php?action=me', {
          method: 'GET',
          credentials: 'include', // 세션 쿠키를 포함하려면 꼭 필요!
        });

        if (!res.ok) throw new Error();

        const data = await res.json();
        setUser(data);
      } catch {
        alert('로그인된 사용자만 접근할 수 있습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  if (loading) return <p>불러오는 중...</p>;
  if (!user) return <p>유저 정보를 불러올 수 없습니다.</p>;

  return (
    <S.Container>
      <S.Title>로그인 정보</S.Title>
      <S.ItemListWrapper>
        <S.InfoWrapper>
          <S.InfoImageWrapper>
            {/* <img src="https://via.placeholder.com/80" alt="User Avatar" /> */}
          </S.InfoImageWrapper>
          <S.InfoItemWrapper>
            <S.InfoName>{user.name}</S.InfoName>
            <S.InfoEmail>{user.email}</S.InfoEmail>
          </S.InfoItemWrapper>
        </S.InfoWrapper>
      </S.ItemListWrapper>
      <S.Title>구매 내역</S.Title>
    </S.Container>
  );
}

export default LoginInfoPage;
