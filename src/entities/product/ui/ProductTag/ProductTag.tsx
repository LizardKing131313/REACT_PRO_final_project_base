import classNames from 'classnames'
import { memo } from 'react'

import styles from './ProductTag.module.css'

type ProductTagProps = {
  tag: string,
}

function ProductTagComponent({ tag }: ProductTagProps) {
  return (
    <span className={classNames(styles.tag, styles.tag_type_new)}>
      {tag}
    </span>
  )
}

export const ProductTag = memo(ProductTagComponent)
ProductTag.displayName = 'ProductTag'
