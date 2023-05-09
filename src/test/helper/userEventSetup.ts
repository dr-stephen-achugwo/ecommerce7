import userEvent from '@testing-library/user-event'

export const userEventSetup = (
  options: Parameters<(typeof userEvent)['setup']>[0] = {},
): ReturnType<(typeof userEvent)['setup']> =>
  userEvent.setup({
    ...options,
  })
