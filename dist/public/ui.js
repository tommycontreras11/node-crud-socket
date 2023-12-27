"use strict";

var notesList = document.querySelector("#notes");
var savedId = "";
var noteUI = function noteUI(note) {
  var div = document.createElement("div");
  div.innerHTML = "\n  <div class=\"card card-body rounded-0 animate__animated animate__fadeInUp mb-2\">\n      <div class=\"d-flex justify-content-between\">\n          <h1 class=\"card-title h3\">".concat(note.title, "</h1>\n          <div>\n              <button class=\"btn btn-danger delete\" data-id=\"").concat(note.id, "\">delete</button>\n              <button class=\"btn btn-secondary update\" data-id=\"").concat(note.id, "\">update</button>\n          </div>\n      </div>\n      <p>").concat(note.description, "</p>\n  </div>\n");
  var btnDelete = div.querySelector(".delete");
  var btnUpdate = div.querySelector(".update");
  btnDelete.addEventListener("click", function () {
    return deleteNote(btnDelete.dataset.id);
  });
  btnUpdate.addEventListener("click", function () {
    socket.emit("client:getnote", btnUpdate.dataset.id);
  });
  return div;
};
var renderNotes = function renderNotes(notes) {
  savedId = "";
  notesList.innerHTML = "";
  console.log(notes);
  notes.forEach(function (note) {
    notesList.append(noteUI(note));
  });
};
var appendNote = function appendNote(note) {
  notesList.append(noteUI(note));
};