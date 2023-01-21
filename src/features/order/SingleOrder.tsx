import OrderProductList from '@/features/order/order-product/OrderProductList';
import Order from '@/types/Order';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  IconButtonProps,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';

export type SingleOrderProps = Pick<Order, keyof Order>;

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SingleOrder(
  props: React.PropsWithChildren<SingleOrderProps>,
) {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(true);

  const handleExpandClick = React.useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <Card sx={{}}>
      <CardHeader
        title={`주문번호 ${props.id}`}
        subheader={`주문일자 ${props.orderAt.toLocaleString()}`}
      />
      <CardContent>
        <Typography variant="body1">총 결제금액: {props.amount}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={isExpanded}
          onClick={handleExpandClick}
          aria-expanded={isExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent>
          <OrderProductList products={props.products} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
