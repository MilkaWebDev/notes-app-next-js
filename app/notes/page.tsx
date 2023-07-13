import Link from 'next/link'
import styles from './Notes.module.css'
import CreateNote from './CreateNote'

const getNotes = async () => {
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records')
  const data = await res.json()
  return data?.items as any[]
}

const Note = ({ note }: any) => {
  const { id, title, content, created } = note || {}
  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{created}</p>
      </div>
    </Link>
  )
}

const NotesPage = async () => {
  const notes = await getNotes()
  return (
    <div>
      <h1>Notes</h1>

      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />
        })}
      </div>

      <CreateNote />
    </div>
  )
}

export default NotesPage
