import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { BackIcon } from '../../../assets'

type ButtonBackProps = {
  className?: string
}

function ButtonBackComponent({ className }: ButtonBackProps) {
  const navigate = useNavigate()

  const handleClick = useCallback(async () => {
    await navigate(-1)
  }, [navigate])

  return (
    <button type="button" onClick={handleClick} className={className}>
      <BackIcon />
    </button>
  )
}

export const ButtonBack = memo(ButtonBackComponent)
ButtonBack.displayName = 'ButtonBack'
