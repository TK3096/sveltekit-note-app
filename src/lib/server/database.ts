import { v4 as uuid } from 'uuid'

export interface INote {
  id?: string
  title: string
  description: string
  slug: string
}

interface IFilterNote {
  latest?: boolean
}

let notes: INote[] = [
  {
    id: 'default-1',
    title: 'Holding on!!!',
    description:
      '<p><strong>Holding on~</strong>, Why everythings so heavy.</p><p><strong>Holding on~</strong>, Why everythings so heavy.</p>',
    slug: 'holding-on',
  },
  {
    id: 'default-2',
    title: 'Crawling!!!',
    description:
      'Crawling in my skin. <br /> These wounds, they will not heal.',
    slug: 'crawling',
  },
  {
    id: 'default-3',
    title: 'Crawling 2',
    description: 'Fear is how I fall <br/> Confusing what is real',
    slug: 'crawling-2',
  },
]

const converSlug = (slug: string) => {
  return slug.toLowerCase().replaceAll(' ', '-')
}

export const add = (data: INote) => {
  const slug = converSlug(data.slug)
  const find = notes.find((note) => note.slug === slug)

  if (find) {
    throw new Error('This slug is already exist')
  }

  const id = uuid()

  notes = [...notes, { id, ...data, slug }]

  return id
}

export const list = (filter?: IFilterNote) => {
  if (filter?.latest) {
    const newNotes = notes.slice(-5)

    return newNotes
  }

  return notes
}

export const get = (slug: string) => {
  const find = notes.find((note) => note.slug === slug)

  if (!find) {
    throw new Error('Note is not found')
  }

  return find
}
