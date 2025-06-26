import axios from 'axios';

const BASE_URL = 'https://makhzny.odoo.com';

export const getBranches = async (filters = {}) => {
  try {
    const payload = {
      company_id: 2,
      min_price: filters.Min_Price,
      max_price: filters.Max_Price,
      min_size: filters.Min_Size,
      max_size: filters.Max_Size
    };
    

    if (filters.Min_Price || filters.Max_Price) {
      payload.price = filters.Max_Price; 
    }

    if (filters.Min_Size || filters.Max_Size) {
      payload.size = filters.Max_Size; 
    }

    const res = await axios.post(`${BASE_URL}/get_products`, payload);
    return res.data.result.data || [];
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
};

