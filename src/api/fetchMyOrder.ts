export const fetchMyOrder = (assetOrder: object): Promise<object> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(assetOrder);
    }, 1000);
  });
};
