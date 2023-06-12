import {
  moneyFormatter,
  datetimeFormatter
} from './formatter';

describe('Formatter', () => {
  const orderAt = '2023-01-01 12:13:14';
  const expectedOrderAtString = '2023/01/01 일요일 12:13:14';

  const price = 34900;
  const expectedPriceString = '34,900';

  it(`${orderAt}을 datetimeFormatter로 포맷팅하면 ${expectedOrderAtString}와 같아야 한다.`, () => {
    const formattedOrderAt = datetimeFormatter(new Date(orderAt));
    expect(formattedOrderAt).toEqual(expectedOrderAtString);
    expect(formattedOrderAt).toMatch(/\d{4}\/\d{2}\/\d{2} (월|화|수|목|금|토|일)요일 \d{2}:\d{2}:\d{2}/);
  });

  it(`${price}을 moneyFormatter로 포맷팅하면 ${expectedPriceString}와 같아야 한다.`, () => {
    const formattedPrice = moneyFormatter(price);
    expect(formattedPrice).toEqual(expectedPriceString);
    expect(formattedPrice).toMatch(/^\d{1,3}(,\d{3})*(\.\d+)?/);
  });

})
