const fetchMyOrder = (assetOrder: any): Promise<object> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(assetOrder);
    }, 1000);
  });
};

export { fetchMyOrder };
