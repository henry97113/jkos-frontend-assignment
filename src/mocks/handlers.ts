import type { Product } from '@/api/products';
import { http, HttpResponse, passthrough } from 'msw';

export const handlers = [
  http.get('/products/:id', ({ params }) => {
    return HttpResponse.json<Product>({
      productId: params.id as string,
      productName:
        'LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列',
      originalPriceMin: 4699,
      originalPriceMax: 3699,
      sellingPriceMin: 2999,
      sellingPriceMax: 3999,
      tags: ['街口結帳享九折優惠', '訂單滿399免運費'],
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
        '靈感來自 90年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。',
      category: '限時優惠',
    });
  }),
  http.get('/product-images/:img', () => {
    return passthrough();
  }),
];
