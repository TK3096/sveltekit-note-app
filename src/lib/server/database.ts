import { v4 as uuid } from 'uuid'

export interface INote {
  id?: string
  title: string
  description: string
}

const notes: INote[] = [
  {
    id: 'test',
    title: 'mock',
    description: 'wwww',
  },
]

export const add = (data: INote) => {
  const find = notes.find((note) => note.title === data.title)

  if (find) {
    throw new Error('Note title is already exist')
  }

  const id = uuid()

  notes.push({
    id,
    ...data,
  })

  return id
}

export const list = () => {
  return notes
}

export const get = () => {
  return undefined
}

export const remove = () => {
  return ''
}
