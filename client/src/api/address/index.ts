import axios from 'axios';
import type { AddressForm, Address } from './entity';

export const addAddress = async (form: AddressForm) => {
  const response = await axios.post(
    'http://localhost/shopping-mall/server/address/add_address.php',
    form,
    { withCredentials: true }
  );
  return response.data;
};

export const fetchAddresses = async (userId: number) => {
  const response = await axios.get<Address[]>(
    `http://localhost/shopping-mall/server/address/get_addresses.php?user_id=${userId}`,
    { withCredentials: true }
  );
  return response.data;
};

export const updateAddress = async (form: AddressForm & { id: number }) => {
  const response = await axios.post(
    'http://localhost/shopping-mall/server/address/update_address.php',
    form,
    { withCredentials: true }
  );
  return response.data;
};

export const deleteAddress = async (id: number) => {
  const response = await axios.post(
    'http://localhost/shopping-mall/server/address/delete_address.php',
    { id },
    { withCredentials: true }
  );
  return response.data;
};

export const setMainAddress = async (userId: number, addressId: number) => {
  const response = await axios.post(
    'http://localhost/shopping-mall/server/address/set_main_address.php',
    {
      user_id: userId,
      address_id: addressId,
    },
    { withCredentials: true }
  );
  return response.data;
};
