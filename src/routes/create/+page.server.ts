import type { Actions } from './$types'

export const actions = {
  create: async () => {
    return { success: true }
  },
} satisfies Actions
