import  {utilsService}  from "../../../services/utils.js";

export const missKeepService={
    query,
    addNote,
    removeNote,
    updateNote,
    pinNote
}

const KEY= 'Notes'


var notes = [
    {
    type: "NoteText",
    isPinned: true,
    info: {
    txt: "Fullstack Me Baby!"
    },
    id: utilsService.getRandId()
    },
    {
    type: "NoteImg",
    info: {
    url: "http://some-img/me",
    title: "Me playing Mi",
    txt:'',
    },
    style: {
    backgroundColor: "#00d"
    },
    id: utilsService.getRandId()
    },
    {
    type: "NoteTodos",
    info: {
    label: "How was it:",
    txt:'',
    todos: [
    { txt: "Do that", doneAt: null },
    { txt: "Do this", doneAt: 187111111 }
    ]
    },
    id: utilsService.getRandId()
    }
   ];


   function query(){

       notes= utilsService.loadFromStorage(KEY) || notes
       utilsService.saveToStorage(KEY, notes)
        return Promise.resolve(notes)
   }

   function addNote(note){
       const NewNote={
           ...note,
           id: utilsService.getRandId()
       }
    notes.push(NewNote)
    utilsService.saveToStorage(KEY, notes)
    
    return Promise.resolve(notes)
   }

   function removeNote(noteId){
    
    notes=notes.filter(note=> note.id!==noteId)
    utilsService.saveToStorage(KEY, notes)
    return Promise.resolve(notes)
   }

   function updateNote(newNote){
       const noteIdx= notes.findIndex(note=> note.id===newNote.id)

       notes.splice(noteIdx, 1, newNote)

       utilsService.saveToStorage(KEY, notes)
       return Promise.resolve(notes)
      
   }

   function pinNote(noteId){
    const noteIdx= notes.findIndex(note=> note.id===noteId)
    const selectedNote= notes.find(note=> note.id===noteId)
    notes.splice(noteIdx,1)
    notes.unshift(selectedNote)
    selectedNote.isPinned=true
    utilsService.saveToStorage(KEY, notes)
    return Promise.resolve(notes)
   }