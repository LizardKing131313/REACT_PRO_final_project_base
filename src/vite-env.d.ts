/// <reference types="vite/client" />
declare module '*.svg' {
  import type { FC, SVGProps } from 'react'

  export const ReactComponent: FC<SVGSVGElement & SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
