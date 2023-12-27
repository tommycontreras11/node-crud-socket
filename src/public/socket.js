const socket = io()

const saveNote = (title, description) => {
    socket.emit('client:newnote', {
        title,
        description
    })
}

const deleteNote = id => {
    socket.emit('client:deletenote', id)
}

socket.on('server:newnote', appendNote)

socket.on('server:loadnotes', renderNotes)