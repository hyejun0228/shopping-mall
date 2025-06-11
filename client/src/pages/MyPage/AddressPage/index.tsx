import { useState } from 'react';
import * as S from './AddressPage.styled';
import AddAddressModal from './AddAddressModal';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteAddress, fetchAddresses, setMainAddress } from '../../../api/address';
import { useUserStore } from '../../../hooks/stores/useUserStore';
import useMediaQuery from '../../../hooks/utils/useMediaQuery';

function AddressPage() {
  const queryClient = useQueryClient();
  const { userId } = useUserStore((state) => state);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 860 });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const { data: addresses = [] } = useQuery({
    queryKey: ['addresses', userId],
    queryFn: () => fetchAddresses(Number(userId)),
    enabled: !!userId,
  });

  const mainAddress = addresses.find((data) => data.is_main_address === 1);

  const otherAddresses = addresses.filter((data) => data.is_main_address === 0);

  const setMainMutation = useMutation({
    mutationFn: (addressId: number) => setMainAddress(Number(userId), addressId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['addresses', userId] }),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteAddress(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['addresses', userId] }),
  });

  return (
    <S.Container isMobile={isMobile}>
      <S.HeaderWrapper isMobile={isMobile}>
        <S.Title isMobile={isMobile}>주소록</S.Title>
        <S.Button type="button" onClick={handleOpenModal}>
          새 주소 추가하기
        </S.Button>
      </S.HeaderWrapper>

      <S.AddressContainer>
        <S.AddressWrapper>
          <S.AddressTitle>기본 배송지</S.AddressTitle>
          {mainAddress ? (
            <S.AddressCard>
              <p>{mainAddress.name}</p>
              <S.CardText>{mainAddress.phone}</S.CardText>
              <S.CardText>
                ({mainAddress.postal_code}) {mainAddress.address} {mainAddress.detail_address}
              </S.CardText>
              <S.ButtonGroup>
                <S.SmallButton onClick={() => deleteMutation.mutate(mainAddress.id)}>
                  삭제
                </S.SmallButton>
              </S.ButtonGroup>
            </S.AddressCard>
          ) : (
            <p>기본 배송지가 없습니다.</p>
          )}
        </S.AddressWrapper>

        <S.AddressWrapper>
          <S.AddressTitle>저장된 주소</S.AddressTitle>
          {otherAddresses.length > 0 ? (
            otherAddresses.map(({ id, name, phone, postal_code, address, detail_address }) => (
              <S.AddressCard key={id}>
                <p>{name}</p>
                <S.CardText>{phone}</S.CardText>
                <S.CardText>
                  ({postal_code}) {address} {detail_address}
                </S.CardText>
                <S.ButtonGroup>
                  <S.SmallButton onClick={() => setMainMutation.mutate(id)}>
                    기본 배송지
                  </S.SmallButton>
                  <S.SmallButton onClick={() => deleteMutation.mutate(id)}>삭제</S.SmallButton>
                </S.ButtonGroup>
              </S.AddressCard>
            ))
          ) : (
            <p>저장된 주소가 없습니다.</p>
          )}
        </S.AddressWrapper>
      </S.AddressContainer>

      {isModalOpen && <AddAddressModal onClose={handleCloseModal} />}
    </S.Container>
  );
}

export default AddressPage;
