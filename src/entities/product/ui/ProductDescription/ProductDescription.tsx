import classNames from 'classnames'
import { memo } from 'react'

import styles from './ProductDescription.module.css'

function ProductDescriptionComponent() {
  return (
    <div className={classNames(styles.product__box)}>
      <h2 className={classNames(styles.product__title)}>Описание</h2>
      <p className={classNames(styles.product__subtitle)}>Описание demo</p>
      <h2 className={classNames(styles.product__title)}>Характеристики</h2>
      <div className={classNames(styles.product__grid)}>
        <div className={classNames(styles.product__naming)}>Вес</div>
        <div className={classNames(styles.product__description)}>1 шт 120-200 грамм</div>
        <div className={classNames(styles.product__naming)}>Цена</div>
        <div className={classNames(styles.product__description)}>490 ₽ за 100 грамм</div>
        <div className={classNames(styles.product__naming)}>Польза</div>
        <div className={classNames(styles.product__description)}>
          <p>
            Большое содержание аминокислот и микроэлементов оказывает положительное воздействие на
            общий обмен веществ собаки.
          </p>
          <p>Способствуют укреплению десен и жевательных мышц.</p>
          <p>Развивают зубочелюстной аппарат, отвлекают собаку во время смены зубов.</p>
          <p>
            Имеет цельную волокнистую структуру, при разжевывание получается эффект зубной щетки,
            лучше всего очищает клыки собак.
          </p>
          <p>Следует учесть высокую калорийность продукта.</p>
        </div>
      </div>
    </div>
  )
}


export const ProductDescription = memo(ProductDescriptionComponent)
ProductDescription.displayName = 'ProductDescription'
