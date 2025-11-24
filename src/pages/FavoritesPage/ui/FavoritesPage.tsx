import { ButtonBack } from 'shared/ui/ButtonBack'
import { WithProtection } from 'widgets/auth'
import { ProductCardList } from 'widgets/product'

export const FavoritesPage = WithProtection(() => (
    <>
      <ButtonBack />
      <ProductCardList title="Избранные" />
    </>
  ))
