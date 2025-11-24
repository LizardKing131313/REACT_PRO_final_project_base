import { objectHasProperty } from './common'

export const getMessageFromError = (error: unknown, defaulterror_message: string) => {
  if (objectHasProperty(error, 'message') && typeof error.message === 'string')
    return error.message

  return defaulterror_message
}
