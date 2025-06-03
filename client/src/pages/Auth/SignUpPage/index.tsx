import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as S from './SignUpPage.styled';
import TextField from '../../../components/common/TextField';

interface LoginForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

function SignUpPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const registerUser = async (data: { username: string; email: string; password: string }) => {
    const response = await fetch('http://localhost/server/router.php?action=register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.username,
        email: data.email,
        password: data.password,
      }),
    });

    const result = await response.json();

    if (!response.ok || result.error) {
      throw new Error(result.error || '회원가입에 실패했습니다.');
    }

    return result;
  };

  const onSubmit = async (data: LoginForm) => {
    try {
      if (data.password !== data.confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      await registerUser(data);
      alert('회원가입 성공! 로그인 페이지로 이동합니다.');
      navigate('/auth/login');
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
            {...register('username', { required: '이름을 입력해주세요' })}
            label="이름"
            type="text"
            message={errors.username?.message}
          />

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

          <TextField
            {...register('confirmPassword', { required: '비밀번호 확인을 입력해주세요' })}
            label="비밀번호 확인"
            type="password"
            message={errors.confirmPassword?.message}
          />
        </S.InputWrapper>

        <S.LoginButton type="submit">회원가입</S.LoginButton>
      </S.LoginForm>
    </S.Container>
  );
}

export default SignUpPage;
