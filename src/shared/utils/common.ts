export const objectHasProperty = <P extends PropertyKey>(
  obj: unknown,
  prop: P
): obj is object & Record<P, unknown> =>
  typeof obj === 'object' && !!obj && Object.hasOwn(obj, prop)

export const mockFetch = <V>(values: V, ms: number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(values)
      } else {
        reject({
          message: 'Error',
        })
      }
    }, ms)
  })
