import classNames from 'classnames'
import React, { memo, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'shared/ui/Image'
import { Position, Tooltip } from 'shared/ui/Tooltip'

import type { Product } from '../../model/types'
import { ProductPrice } from '../ProductPrice/ProductPrice'
import { ProductTag } from '../ProductTag/ProductTag'

import styles from './ProductCard.module.css'

type ProductCardProps = {
  product: Pick<Product, 'id' | 'name' | 'price' | 'discount' | 'tags' | 'images'>
  topRightSlot?: React.ReactNode
  bottomSlot?: React.ReactNode
}

function ProductCardComponent({
  product: { id, name, price, discount, tags, images },
  topRightSlot,
  bottomSlot
}: ProductCardProps) {
  const percent = Math.round((discount / price) * 100)

  const tagsMeasureRef = useRef<HTMLSpanElement | null>(null)
  const [isTagsOverflow, setIsTagsOverflow] = useState(false)

  useLayoutEffect(() => {
    const fullWidth = tagsMeasureRef.current?.scrollWidth ?? 0
    setIsTagsOverflow(fullWidth > 200)
  }, [tags])

  const link = `/products/${id}`

  const tagsString = tags?.length ? tags.join(', ') : ''

  return (
    <article className={styles.card}>
      <div className={classNames(styles.card__sticky, styles.card__sticky_type_top_left)}>
        {percent !== 0 && (
          <span className={styles.card__discount}>{percent}%</span>
        )}

        <span ref={tagsMeasureRef}
              className={styles.card__tags_measure}
              aria-hidden="true">
          {tags.map(tag => (
            <ProductTag key={tag} tag={tag} />
          ))}
        </span>

        {isTagsOverflow ? (
          <Tooltip content={tagsString} position={Position.Top}>
            <ProductTag tag="..." />
          </Tooltip>
        ) : (
          <span className={styles.card__tags}>
            {tags.map(tag => (
              <ProductTag key={tag} tag={tag} />
            ))}
          </span>
        )}
      </div>

      <div className={classNames(styles.card__sticky, styles.card__sticky_type_top_right)}>
        {topRightSlot}
      </div>

      <Link className={styles.card__link} to={link}>
        <Image src={images} alt={name} imageClassName={styles.card__image} />

        <div className={styles.card__desc}>
          <ProductPrice price={price} discountPrice={discount} />

          <h3 className={styles.card__name}>{name}</h3>
        </div>
      </Link>

      {bottomSlot}
    </article>
  )
}

export const ProductCard = memo(ProductCardComponent)
ProductCard.displayName = 'ProductCard'
