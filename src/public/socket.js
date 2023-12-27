const socket = io()

/**
 * Save a new note
 * @param {string} title note title 
 * @param {string} description note description
 */
const saveNote = (title, description) => {
    socket.emit('client:newnote', {
        title,
        description
    })
}

/**
 * Update a note
 * @param {string} id note id
 * @param {string} title note title 
 * @param {string} description note description 
 */
const updateNote = (id, title, description) => {
    socket.emit('client:updatenote', {
        id,
        title,
        description
    })
}

/**
 * Delete a note
 * @param {string} id 
 */
const deleteNote = (id) => {  
    socket.emit('client:deletenote', id)
}

/**
 * Get a note
 * @param {string} id note id
 */
const getNote = (id) => {
    socket.emit('client:getnote', id)
}

socket.on('server:newnote', appendNote)

socket.on('server:loadnotes', renderNotes)

socket.on("server:selectednote", (note) => {
    const title = document.getElementById("title");
    const description = document.getElementById("description");
  
    title.value = note.title;
    description.value = note.description;
  
    savedId = note.id;
});