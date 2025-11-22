import { StarIcon } from '../../../assets'

type TRating = {
  rating?: number
  isEdit?: boolean
  onChange?: (rating: number) => void
}
export const Rating = ({ rating = 0, isEdit = false, onChange }: TRating) => (
  <div>
    {[...Array(5)].map((_e, i) => (
      <span key={i} style={{ cursor: isEdit ? 'pointer' : 'default' }}>
        <StarIcon onClick={() => onChange?.(i)} fill={i <= rating ? 'gold' : 'gray'} />
      </span>
    ))}
  </div>
)
