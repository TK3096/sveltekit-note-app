import type { PageServerLoad } from './$types'
import type { INote } from '$lib/server/database'

import { list } from '$lib/server/database'

export const load = (async () => {
  let notes: INote[] = []

  try {
    notes = await list({ latest: true })
  } catch (e: unknown) {
    if (e instanceof Error) {
      return { success: false, message: e.message, notes }
    }
  }

  return { success: true, notes }
}) satisfies PageServerLoad
