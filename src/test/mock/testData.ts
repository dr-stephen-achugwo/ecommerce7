import type { Detail } from 'lib/type/Type'

export const detail: Detail = {
  description: 'description',
  descriptionHtml: '<div>descriptionHtml</div>',
  id: 'id',
  images: [],
  price: '12345',
  productType: 'productType',
  title: 'title',
  variants: [
    {
      available: true,
      color: 'White',
      id: 'variants1',
      size: 'S',
    },
    {
      available: true,
      color: 'White',
      id: 'variants2',
      size: 'M',
    },
    {
      available: true,
      color: 'White',
      id: 'variants3',
      size: 'L',
    },
    {
      available: false,
      color: 'Black',
      id: 'variants4',
      size: 'F',
    },
    {
      available: false,
      color: 'Grey',
      id: 'variants5',
      size: 'F',
    },
  ],
}
