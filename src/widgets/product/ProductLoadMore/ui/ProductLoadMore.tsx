import { Alert, CircularProgress, Stack } from '@mui/material'
import { memo, useRef } from 'react'

import { useLoadMore } from '../hooks/useLoadMore'

function ProductLoadMoreComponent() {
  const ref = useRef<HTMLDivElement>(null)
  const { isEndOfList, isFetching } = useLoadMore({ ref })

  return (
    <Stack ref={ref} direction="row" justifyContent="center" alignItems="center" sx={{ my: 5 }}>
      {isFetching && <CircularProgress />}
      {isEndOfList && <Alert severity="success">End of list!</Alert>}
    </Stack>
  )
}

export const ProductLoadMore = memo(ProductLoadMoreComponent)
ProductLoadMore.displayName = 'ProductLoadMore'
