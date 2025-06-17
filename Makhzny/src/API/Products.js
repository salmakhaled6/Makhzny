import axios from 'axios';

const Makhzny_BASE_URL = 'https://makhzny.odoo.com';

export const getBranches = async (filters = {}) => {
  const res = await axios.post(`${Makhzny_BASE_URL}/get_products`, {
    company_id: 2,
    ...filters
  });

  return res.data?.result?.data || [];
};
