import OrderListRepository from '@adapters/repositories/OrderListRepository';
import {OrderDto} from "@domains/dto/OrderDto";
import OrderAssetImporter from '@adapters/infrastructures/OrderAssetImporter';
import { IOrderListRepository } from '@domains/usecases/repositories/iOrderListRepository';
import { IAssetImporter } from '@adapters/infrastructures/interfaces/iAssetImporter';

const assetImporter: IAssetImporter = OrderAssetImporter.getInstance();
const repository: IOrderListRepository = OrderListRepository.getInstance(assetImporter);


describe('OrderListRepository Test', () => {
  test('repository로부터 주문내역 정보를 받는다.', async () => {
    // Arrange

    // Act
    const orderDto: Array<OrderDto> = await repository.getOrderList();

    // Assert
    expect(orderDto).toBeTruthy();
    expect(orderDto.length).toBeGreaterThanOrEqual(1);
  });
});