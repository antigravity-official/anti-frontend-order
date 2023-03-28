export const transBool = (value: string) => {
  if (value?.toLowerCase() === "false" || value?.toLowerCase() === "true") {
    return value === "true";
  }
  return value;
};
