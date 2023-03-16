import type { Actions } from './$types'

import { fail } from '@sveltejs/kit'

import { add } from '$lib/server/database'

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData()
    const title = data.get('title') as string
    const description = data.get('description') as string
    const slug = data.get('slug') as string

    let id = ''

    try {
      id = await add({
        title,
        description,
        slug,
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        return fail(400, { success: false, message: error.message })
      }
    }

    return { success: true, id, message: 'Successfully' }
  },
} satisfies Actions
