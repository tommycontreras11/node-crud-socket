"use strict";

var socket = io();

/**
 * Save a new note
 * @param {string} title note title 
 * @param {string} description note description
 */
var saveNote = function saveNote(title, description) {
  socket.emit('client:newnote', {
    title: title,
    description: description
  });
};

/**
 * Update a note
 * @param {string} id note id
 * @param {string} title note title 
 * @param {string} description note description 
 */
var updateNote = function updateNote(id, title, description) {
  socket.emit('client:updatenote', {
    id: id,
    title: title,
    description: description
  });
};

/**
 * Delete a note
 * @param {string} id 
 */
var deleteNote = function deleteNote(id) {
  socket.emit('client:deletenote', id);
};

/**
 * Get a note
 * @param {string} id note id
 */
var getNote = function getNote(id) {
  socket.emit('client:getnote', id);
};
socket.on('server:newnote', appendNote);
socket.on('server:loadnotes', renderNotes);
socket.on("server:selectednote", function (note) {
  var title = document.getElementById("title");
  var description = document.getElementById("description");
  title.value = note.title;
  description.value = note.description;
  savedId = note.id;
});