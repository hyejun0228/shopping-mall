import { useForm } from 'react-hook-form';
import * as S from './LoginPage.styled';
import TextField from '../../../components/common/TextField';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../hooks/stores/useUserStore';

interface LoginForm {
  email: string;
  password: string;
}

function LoginPage() {
  const navigate = useNavigate();
  const setUserId = useUserStore((state: { setUserId: (id: number) => void }) => state.setUserId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginUser = async (data: LoginForm) => {
    const response = await fetch('http://localhost/shopping-mall/server/router.php?action=login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok || result.error) {
      throw new Error(result.error || '로그인에 실패했습니다.');
    }

    return result;
  };

  const onSubmit = async (data: LoginForm) => {
    try {
      const result = await loginUser(data);
      console.log('✅ 로그인 응답:', result);

      if (result.user_id) {
        setUserId(result.user_id);
      } else {
        throw new Error('로그인 정보에 user_id가 없습니다.');
      }

      navigate('/mypage');
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <S.Container>
      <S.Title>VIVORA</S.Title>
      <S.SubTitle>VIVORA에 오신 것을 환영합니다.</S.SubTitle>
      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrapper>
          <TextField
            {...register('email', { required: '이메일을 입력해주세요' })}
            label="이메일"
            type="email"
            placeholder="example@vivora.com"
            message={errors.email?.message}
          />

          <TextField
            {...register('password', { required: '비밀번호를 입력해주세요' })}
            label="비밀번호"
            type="password"
            message={errors.password?.message}
          />
        </S.InputWrapper>

        <S.LoginButton type="submit">로그인</S.LoginButton>
      </S.LoginForm>
      <S.GoToSignUpWrapper>
        <S.Text>아직 회원이 아니신가요?</S.Text>
        <S.Link type="button" onClick={() => navigate('/auth/signup')}>
          회원가입 하러가기
        </S.Link>
      </S.GoToSignUpWrapper>
    </S.Container>
  );
}

export default LoginPage;
