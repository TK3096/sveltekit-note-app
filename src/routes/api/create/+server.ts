import { json, error } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

import { add } from '$lib/server/database'

export const POST = (async ({ request }) => {
  const { title, description } = await request.json()

  let response = {}

  try {
    const id = await add({ title, description })

    response = { id }
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw error(400, { message: e.message })
    }
  }

  return json({ ...response })
}) satisfies RequestHandler
