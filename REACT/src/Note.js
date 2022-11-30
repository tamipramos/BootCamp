export const Note = ({note}) =>{
    return (
            <li>
                <p>
                {note.content}
                </p>
                <small style={{color: '#fff'}}>
                    <time>{note.date}</time>
                    <p className="T3">Prioridad: {note.important ? 'IMPORTANTE' : 'NORMAL'}</p>
                </small>
            </li>
    ) 

}