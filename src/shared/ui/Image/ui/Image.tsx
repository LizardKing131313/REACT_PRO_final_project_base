import classNames from 'classnames'
import { memo, useState } from 'react'

import styles from './Image.module.css'

type ImageProps = {
  src: string
  alt?: string | undefined
  wrapperClassName?: string | undefined
  imageClassName?: string | undefined
}

function ImageComponent({ src, alt, wrapperClassName, imageClassName }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  const handleImageError = () => {
    setIsError(true)
  }

  return (
    <div className={classNames(styles.wrapper, wrapperClassName)}>
      <div className={classNames(styles.placeholder, isLoaded && styles.placeholder_hidden)}
           style={!isError ? { backgroundImage: `url(${src})` } : undefined} />

      <img src={src}
           alt={alt ?? ''}
           className={classNames(styles.image, isLoaded && styles.image_loaded, imageClassName)}
           loading="lazy"
           onLoad={handleImageLoad}
           onError={handleImageError} />
    </div>
  )
}

export const Image = memo(ImageComponent)
Image.displayName = 'Image'
