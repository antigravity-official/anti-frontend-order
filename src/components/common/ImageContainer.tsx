import styled from 'styled-components';

interface ImageProps {
  imageUrl: string;
  sizeProps: ImageSizeProps;
}
interface ImageSizeProps {
  width: string;
  height: string;
}
const ImageContainer = ({ imageUrl, sizeProps: { width, height } }: ImageProps) => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.target instanceof HTMLImageElement) {
      e.target.src = 'https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg';
    }
  };
  return (
    <ImageWrapper width={width} height={height}>
      <img src={imageUrl} alt="상품 상세 이미지" onError={handleImgError} />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div<ImageSizeProps>`
  overflow: hidden;
  width: ${({width}) => width};
  height: ${({height}) => height};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default ImageContainer;
