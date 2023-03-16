import type { LayoutServerLoad } from './$types'
import type { INote } from '$lib/server/database'

import { list, get } from '$lib/server/database'

export const load = (async ({ params }) => {
  let notes: INote[] = []
  let note: INote | undefined = undefined

  try {
    notes = await list({ latest: true })
    note = await get(params.slug)
  } catch (e: unknown) {
    if (e instanceof Error) {
      return { success: false, message: e.message, notes, note }
    }
  }

  return { success: true, notes, note }
}) satisfies LayoutServerLoad
