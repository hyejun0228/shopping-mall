import styled from 'styled-components';
import typo from '../../../styles/typo';

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  gap: 16px;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
`;

export const Info = styled.div`
  width: 100%;
`;

export const Brand = styled.p`
  ${typo['body-4-b']}
  color: #4E4E4E;
`;

export const Name = styled.p`
  ${typo['body-2-r']}
  color: #021730;
`;

export const Description = styled.p`
  ${typo['body-4-r']}
  color: #A7A7A7;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PriceTitle = styled.p`
  ${typo['body-4-r']}
  color: #021730;
`;

export const Price = styled.p`
  ${typo['body-4-b']}
  color: #021730;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: space-between;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const DeleteButton = styled.button`
  display: flex;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  width: 24px;
  height: 24px;
`;


export const ItemCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: flex;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    border-color: #888;
  }

  &:checked {
    background-color: #021730;
    border-color: #021730;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -60%) rotate(45deg);
  }
`;
