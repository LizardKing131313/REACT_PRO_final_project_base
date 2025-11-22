import { useNavigate } from 'react-router-dom'

import { BackIcon } from '../../../assets'

export const ButtonBack = () => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(-1)}>
      <BackIcon />
    </button>
  )
}
