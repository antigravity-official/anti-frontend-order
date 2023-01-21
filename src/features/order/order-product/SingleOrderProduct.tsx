import OrderProduct from '@/types/OrderProduct';
import { Box, CardMedia, Divider, Typography } from '@mui/material';
import { useImage } from 'react-image';
import React from 'react';

export type SingleOrderProductProps = Pick<OrderProduct, keyof OrderProduct>;

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { error: false, errorMessage: '' };
  }

  state = { error: false, errorMessage: '' };

  static getDerivedStateFromError(error: Error) {
    // Update state to render the fallback UI
    return { error: true, errorMessage: JSON.stringify(error) };
  }

  render() {
    if (this.state.error) {
      // ignore error
      return null;
    }

    return this.props.children;
  }
}

export function ProductImage(
  props: { url: string } & { product: SingleOrderProductProps },
) {
  const { src } = useImage({
    srcList: props.url,
  });
  return (
    <CardMedia
      component="img"
      image={src}
      alt={`${props.product.name}_${props.product.id}`}
    />
  );
}

export default function SingleOrderProduct(
  props: React.PropsWithChildren<SingleOrderProductProps>,
) {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ flex: 1 }}>
          <Typography>{props.name}</Typography>
          <Typography>{props.price}원</Typography>
          <Typography>주문수량 {props.stock.quantity}개</Typography>
          <Typography>색상: {props.stock.color}</Typography>
          <Typography>
            {props.stock.band}, {props.stock.cup}컵
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          {props.imageUrls.map((url) => (
            <React.Fragment key={url}>
              <ErrorBoundary>
                <React.Suspense fallback={<></>}>
                  <ProductImage url={url} product={props} />
                </React.Suspense>
              </ErrorBoundary>
            </React.Fragment>
          ))}
        </Box>
      </Box>
      <Divider sx={{ my: 1 }} />
    </>
  );
}
