import classNames from 'classnames'
import { cartSelectors } from 'features/cart/slice/cart'
import { isLiked, ProductSearch } from 'features/product'
import { useProducts } from 'features/product/hooks/useProducts'
import { userSelectors } from 'features/user/slice/user'
import { Link } from 'react-router-dom'
import { CartIcon, FavoriteIcon, ProfileIcon } from 'shared/assets'
import { useAppSelector } from 'shared/store/utils'
import { Logo } from 'shared/ui/Logo'

import styles from './Header.module.css'

export const Header = () => {
  const user = useAppSelector(userSelectors.getUser)
  const { products } = useProducts(user)
  const cartProducts = useAppSelector(cartSelectors.getCartProducts)

  const likeCount = products.filter((product) =>
    isLiked(product.likes, user?.id)).length

  const accessToken = useAppSelector(userSelectors.getAccessToken)

  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.header__wrapper)}>
        <Logo />
        <ProductSearch />

        <div className={styles.header__icons_menu}>
          <Link className={styles.header__favorites_link} to="/favorites">
            <FavoriteIcon />
            <span className={styles.header__icon_bubble}>{likeCount}</span>
          </Link>

          <Link className={styles.header__favorites_link} to="/cart">
            <CartIcon />
            <span className={styles.header__icon_bubble}>{cartProducts.length}</span>
          </Link>

          {accessToken && (
            <>
              <Link className={styles.header__icons_menu_item} to="/profile">
                <ProfileIcon />
              </Link>

              <Link className={styles.header__icons_menu_item} to={'/signin'}>
                Выйти
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
