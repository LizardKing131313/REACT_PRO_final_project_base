import { WithProtection } from 'widgets/auth'
import { ProductCardList, ProductLoadMore } from 'widgets/product'

export const HomePage = WithProtection(() => (
  <>
    <ProductCardList title="Лакомства" />
    <ProductLoadMore />
  </>
))
