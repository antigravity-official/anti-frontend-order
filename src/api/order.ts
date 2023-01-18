import axiosInstance from '@/globals/axiosInstance';

// the api function naming is {HTTP_METHOD}{RESOURCE_NAME}
export const getOrders = async () => {
  const response = await axiosInstance.get('/v1/orders');
  return response.data;
};

// if the GET result is a single object, use getSingle{RESOURCE_NAME}
export const getSingleOrder = async (id: string) => {
  const response = await axiosInstance.get(`/v1/orders/${id}`);
  return response.data;
};
