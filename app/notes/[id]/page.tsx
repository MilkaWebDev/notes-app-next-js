import styles from '../Notes.module.css'

const getNote = async (noteID: string) => {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteID}`
  )
  const data = await res.json()
  return data
}

const NoteDetail = async ({ params }: any) => {
  const { id, title, content, created } = await getNote(params.id)
  return (
    <div>
      <h1>notes/{id}</h1>
      <div className={styles.note}>
        <h3>{title}</h3>
        <h3>{content}</h3>
        <h3>{created}</h3>
      </div>
    </div>
  )
}

export default NoteDetail
