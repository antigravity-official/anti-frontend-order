import styled from 'styled-components';

interface ImageProps {
  imageUrls: string;
}

const useProductImage = (props: ImageProps) => {
  const { imageUrls } = props;
  const handleError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    if (event.target instanceof HTMLImageElement) {
      event.target.src = 'https://placehold.co/100x100';
    }
  };

  return (
    <div>
      <ProductImage src={imageUrls} alt="상품 이미지" onError={handleError} />
    </div>
  );
};
export default useProductImage;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 15px;
`;
