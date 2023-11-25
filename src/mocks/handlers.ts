import type { Product } from '@/api/products';
import { delay, http, HttpResponse, passthrough } from 'msw';

export const handlers = [
  http.get('/products/:id', async ({ params }) => {
    await delay();
    return HttpResponse.json<Product>({
      productId: params.id as string,
      productName:
        'LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列',
      originalPriceMin: 3699,
      originalPriceMax: 4699,
      sellingPriceMin: 2999,
      sellingPriceMax: 3999,
      tags: ['街口結帳享九折優惠', '訂單滿399免運費'],
      colorList: [
        { variant: '酷炫黑', inStock: true },
        { variant: '紫旋風', inStock: true },
        { variant: '暴風紅', inStock: false },
        { variant: '耀眼黃', inStock: true },
        { variant: 'Very longgggggggggggg option', inStock: true },
      ],
      sizeList: [
        {
          variant: 'S',
          inStock: true,
        },
        {
          variant: 'M',
          inStock: false,
        },
        {
          variant: 'L',
          inStock: true,
        },
        {
          variant: 'XL',
          inStock: true,
        },
        {
          variant: 'XXL',
          inStock: true,
        },
      ],
      productImages: [
        '/product-images/1.jpeg',
        '/product-images/2.jpeg',
        '/product-images/3.jpeg',
        '/product-images/4.jpeg',
      ],
      notes: [
        '請於訂單備註填寫您需要的球員',
        '球員搭配之號碼不可替換',
        '球員款客製訂單出貨需要十四個工作天',
      ],
      sideNote:
        '請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。',
      description:
        '全能達人 Pro-Player Baseball Glove 是專為棒球愛好者設計的高品質手套。由耐磨的 PU 人造牛皮製成，這款手套非常柔韌，適合長時間使用。手套的內襯超柔軟，提供了出色的舒適度和防護性。此外，我們的手套適合左手和右手的使用者，並且適合兒童、青少年和成人。無論你是在練習還是在比賽中，全能達人 Pro-Player Baseball Glove 都是你的理想選擇。',
      category: '限時優惠',
    });
  }),
  http.get('/product-images/:img', () => {
    return passthrough();
  }),
];
