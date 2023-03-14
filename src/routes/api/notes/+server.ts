import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

import { list } from '$lib/server/database'

export const GET = (async () => {
  const data = await list()

  console.log(data)

  return json({ data })
}) satisfies RequestHandler
