import  {UtilsService}  from "../../../services/utils.js";

export const missKeepService={
    query,
    addNote
}

const KEY= 'Notes'


var notes = [
    {
    type: "NoteText",
    isPinned: true,
    info: {
    txt: "Fullstack Me Baby!"
    }
    },
    {
    type: "NoteImg",
    info: {
    url: "http://some-img/me",
    title: "Me playing Mi"
    },
    style: {
    backgroundColor: "#00d"
    }
    },
    {
    type: "NoteTodos",
    info: {
    label: "How was it:",
    todos: [
    { txt: "Do that", doneAt: null },
    { txt: "Do this", doneAt: 187111111 }
    ]
    }
    }
   ];


   function query(){

       notes= UtilsService.loadFromStorage(KEY) || notes
       UtilsService.saveToStorage(KEY, notes)
        return Promise.resolve(notes)
   }

   function addNote(note){
    notes.unshift(note)
    UtilsService.saveToStorage(KEY, notes)
    
    return Promise.resolve(notes)
   }