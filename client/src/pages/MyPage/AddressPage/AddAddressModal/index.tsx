import { useEffect } from 'react';
import * as S from './AddAddressModal.styled';
import { Controller, useForm } from 'react-hook-form';
import CloseIcon from '@/assets/svg/close.svg?react';
import TextField from '../../../../components/common/TextField';
import { addAddress } from '../../../../api/address';
import { useUserStore } from '../../../../hooks/stores/useUserStore';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
  onClose: () => void;
}

interface AddressForm {
  name: string;
  phone: string;
  postalCode: string;
  address: string;
  detailAddress: string;
  isMainAddress: boolean;
}

function AddAddressModal({ onClose }: Props) {
  const userId = useUserStore((state) => state.userId);
  const queryClient = useQueryClient();

  const { register, handleSubmit, control } = useForm<AddressForm>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      phone: '',
      postalCode: '',
      address: '',
      detailAddress: '',
      isMainAddress: false,
    },
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const onSubmit = async (form: AddressForm) => {
    if (!userId) {
      alert('로그인이 필요합니다.');
      return;
    }

    try {
      await addAddress({
        user_id: Number(userId),
        ...form,
        postal_code: '',
        detail_address: '',
        is_main_address: 0,
      });
      queryClient.invalidateQueries({ queryKey: ['addresses', userId] });
      alert('주소가 추가되었습니다.');
      onClose();
    } catch (err) {
      console.error(err);
      alert('주소 추가 실패');
    }
  };

  return (
    <S.ModalOverlay>
      <S.ModalContainerForm onSubmit={handleSubmit(onSubmit)}>
        <S.ModalHeader>
          <S.ModalTitle>새 주소 추가</S.ModalTitle>
          <S.CloseButton onClick={onClose}>
            <CloseIcon />
          </S.CloseButton>
        </S.ModalHeader>
        <S.ModalBody>
          <TextField
            {...register('name', { required: '이름을 입력해주세요' })}
            label="이름"
            type="text"
            placeholder="수령인의 이름을 입력해주세요"
          />
          <TextField
            {...register('phone', { required: '전화번호를 입력해주세요' })}
            label="전화번호"
            type="text"
            placeholder="- 없이 입력해주세요"
          />
          <TextField
            {...register('postalCode', { required: '우편번호를 입력해주세요' })}
            label="우편번호"
            type="text"
            placeholder="우편 번호를 검색하세요"
          />
          <TextField
            {...register('address', { required: '주소를 입력해주세요' })}
            label="주소"
            type="text"
            placeholder="시/도, 구/군, 동/읍/면 등을 입력해주세요"
          />
          <TextField
            {...register('detailAddress', { required: '상세주소를 입력해주세요' })}
            label="상세주소"
            type="text"
            placeholder="건물, 아파트, 동/호수 등을 입력해주세요"
          />
          <Controller
            control={control}
            name="isMainAddress"
            render={({ field }) => (
              <S.Label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={field.value} onChange={field.onChange} />
                기본 배송지로 설정
              </S.Label>
            )}
          />
        </S.ModalBody>
        <S.ButtonWrapper>
          <S.CancelButton type="button" onClick={onClose}>
            취소
          </S.CancelButton>
          <S.AddButton type="submit">추가하기</S.AddButton>
        </S.ButtonWrapper>
      </S.ModalContainerForm>
    </S.ModalOverlay>
  );
}

export default AddAddressModal;
