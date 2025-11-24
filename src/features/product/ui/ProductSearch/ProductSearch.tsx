import { memo, useCallback, type ChangeEvent, type FormEvent } from 'react'
import { ClearIcon } from 'shared/assets'

import { useProductsSearchForm } from '../../hooks/usePostsSearchForm'

import styles from './ProductSearch.module.css'

function ProductSearchComponent() {
  const { searchValue, setSearchValue } = useProductsSearchForm()

  const handleFormSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
    },
    []
  )

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value)
    },
    [setSearchValue]
  )

  const handleClearSearchText = useCallback(() => {
    setSearchValue('')
  }, [setSearchValue])

  return (
    <form className={styles.search} onSubmit={handleFormSubmit}>
      <input type="text"
             className={styles.search__input}
             placeholder="Поиск"
             value={searchValue}
             onChange={handleInputChange} />

      {searchValue.length > 0 && (
        <button type="button"
                className={styles.search__btn}
                onClick={handleClearSearchText}
                aria-label="Очистить поиск">
          <ClearIcon />
        </button>
      )}
    </form>
  )
}

export const ProductSearch = memo(ProductSearchComponent)
ProductSearch.displayName = 'ProductSearch'
