import { v4 as uuid } from 'uuid'

export interface INote {
  id?: string
  title: string
  description: string
}

let notes: INote[] = [
  {
    id: 'test',
    title: 'This is test data',
    description: 'Description for test data',
  },
  {
    id: 'test2',
    title: 'This is test data 2',
    description: 'Description for test data',
  },
  {
    id: 'tes3',
    title: 'This is test data 3',
    description: 'Description for test data',
  },
]

export const add = (data: INote) => {
  const find = notes.find((note) => note.title === data.title)

  if (find) {
    throw new Error('Note title is already exist')
  }

  const id = uuid()

  notes = [...notes, { id, ...data }]

  return id
}

export const list = () => {
  return notes
}

export const get = (id: string) => {
  const find = notes.find((note) => (note.id = id))

  if (!find) {
    throw new Error('Note is not found')
  }

  return find
}

export const remove = (id: string) => {
  const newNotes = notes.filter((note) => note.id !== id)

  if (newNotes.length === notes.length) {
    throw new Error('Note is not found')
  }

  notes = [...newNotes]

  return true
}
