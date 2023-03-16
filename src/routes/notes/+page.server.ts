import type { PageServerLoad } from './$types'
import type { INote } from '$lib/server/database'

import { fail } from '@sveltejs/kit'

import { list } from '$lib/server/database'

export const load = (async () => {
  let notes: INote[] = []

  try {
    notes = await list()
  } catch (e: unknown) {
    if (e instanceof Error) {
      return { success: false, message: 'Cannot fetch notes', notes }
    }
  }

  return { success: true, notes }
}) satisfies PageServerLoad