import type { Product } from 'entities/product'

export type CartProduct = Product & {
  count: number;
};
