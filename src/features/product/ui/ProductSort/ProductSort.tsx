import type { Sort } from 'entities/product'
import { memo, useCallback } from 'react'
import type { ChangeEvent } from 'react'

import { useSort } from '../../hooks/useSort'

import styles from './ProductSort.module.css'

type ProductSortProps = {
  className?: string
}

function ProductSortComponent({ className }: ProductSortProps) {
  const { sort, setSort, sortParams } = useSort()

  const handleSortSelect = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const newSort = event.target.value as Sort
      setSort(newSort)
    },
    [setSort]
  )

  return (
    <div className={className}>
      <select className={styles.product_sort} value={sort} onChange={handleSortSelect}>
        {sortParams.map((param) => (
          <option key={param.value} value={param.value}>
            {param.title}
          </option>
        ))}
      </select>
    </div>
  )
}

export const ProductSort = memo(ProductSortComponent)
ProductSort.displayName = 'ProductSort'
