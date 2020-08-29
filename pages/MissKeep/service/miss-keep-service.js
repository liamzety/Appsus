import  {utilsService}  from "../../../services/utils.js";

export const missKeepService={
    query,
    addNote,
    removeNote,
    updateNote,
    pinNote,
    sendNote,
    updateTodos,
    markTodo,
    removeTodo
}

const KEY= 'Notes'


var notes = [

    {type: "NoteText",
    isPinned: false,
    info: {
    txt: "I went to this girl’s party the week after she beat the shit out of my friend. While everyone was getting trashed, I went around putting tuna inside all the curtain rods and so like weeks went by and they couldn’t figure out why the house smelled like festering death. They caught me through this video where these guys at the party were singing Beyoncé while I was in the background with a can of tuna."
    },
    style:{
        backgroundColor:'red'
    },
    id: utilsService.getRandId()},

    {type: "NoteVideo",
    isPinned: false,
    info: {
        title:'love it',
    url: "https://www.youtube.com/watch?v=aR-KAldshAE&feature=emb_rel_err"
    },
    style:{
        backgroundColor:'grey'
    },
    id: utilsService.getRandId()},

    {type: "NoteImg",
    isPinned: false,
    info: {
        title:"SO sad....",
    url: "https://media.giphy.com/media/lszAB3TzFtRaU/giphy.gif"
    },
    style:{
        backgroundColor:'#00d'
    },
    id: utilsService.getRandId()},
  
    
    {type: "NoteTodos",
    info: {
        label: "CROSSFIT!!!",
        txt:'',
        todos: [
            { txt: "Lift sumtin", doneAt: null ,id: utilsService.getRandId()},
            { txt: "Throw sumtin", doneAt: null ,id: utilsService.getRandId()},
            { txt: "Carry sumtin", doneAt: 187111111 ,id: utilsService.getRandId()},
            { txt: "Throw someone", doneAt: null ,id: utilsService.getRandId()},
            { txt: "Puke", doneAt: null ,id: utilsService.getRandId()},
            { txt: "Repeat", doneAt: 187111111 ,id: utilsService.getRandId() }]
        },
        style:{
        backgroundColor:'darkgrey'
    },
    id: utilsService.getRandId()},
    
        {type: "NoteImg",
        info: {
        url: "https://media.giphy.com/media/de9SDw6PGRsubN1o3X/giphy.gif",
        title: "nop",
        txt:'',
        },
        style: {
        backgroundColor: "pink"
        },
        id: utilsService.getRandId()},

    {type: "NoteVideo",
    info: {
    title: "Listen to this!",
    url:'https://www.youtube.com/watch?v=-J9FuvPmMoI'
    },
    style:{
        backgroundColor:'#ffffff'
    },
    id: utilsService.getRandId()},

    {type: "NoteText",
    info: {
    txt:"In the English language, the breed's officially recognized name is German Shepherd Dog (GSD). The breed was officially known as the Alsatian in the UK from after the First World War until 1977 when its name was changed back to German Shepherd.",
    },
    style:{
        backgroundColor:'#1a994f'
    },
    id: utilsService.getRandId()},

    {type: "NoteTodos",
    info: {
    label: "Grocery List",
    txt:'',
    todos: [
    { txt: "Milk", doneAt: null ,id: utilsService.getRandId()},
    { txt: "MEAT!!", doneAt: null ,id: utilsService.getRandId()},
    { txt: "MEAT!!!", doneAt: null ,id: utilsService.getRandId()},
    { txt: "1 Cucumber", doneAt: null ,id: utilsService.getRandId()},
    { txt: "2 halves of the same cucumber", doneAt: null ,id: utilsService.getRandId()},
    { txt: "Cheese", doneAt: 187111111 ,id: utilsService.getRandId() }]
    },
    style:{
        backgroundColor:'#ffffff'
    },
    id: utilsService.getRandId()},

    {type: "NoteImg",
    info: {
    title: "Do you even?",
    url:'https://media.giphy.com/media/3mJyfDFH0BqgbdghWJ/giphy.gif',
    },
    style:{
        backgroundColor:'#ffffff'
    },
    id: utilsService.getRandId()},
    
    {type: "NoteVideo",
    info: {
    title: "get to know this guy!",
    url:'https://www.youtube.com/watch?v=zwQd0iqvbMg',
    },
    style:{
        backgroundColor:'#007DFC'
    },
    id: utilsService.getRandId()
    }];


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

   function sendNote(noteId){
       const selectedNote= notes.find(note=> note.id===noteId)


       return Promise.resolve(selectedNote)
   }

   function updateTodos(todos, newTodo){
    
    const todo={
        txt:newTodo,
        doneAt: false,
        id: utilsService.getRandId()
    }

    todos.push(todo)

    utilsService.saveToStorage(KEY, notes)
    return Promise.resolve(todos)
   }

   function markTodo(todoId,noteId){
    let selectedNote= notes.find(note=> note.id===noteId)
   
    let selectedTodo= selectedNote.info.todos.find(todo => todo.id===todoId)
    const todoIdx= selectedNote.info.todos.findIndex(todo=> todo.id===todoId)

    selectedTodo.doneAt = !selectedTodo.doneAt ?  Date.now() : false

    selectedNote.info.todos.splice(todoIdx,1,selectedTodo)
    utilsService.saveToStorage(KEY, notes)
    return Promise.resolve(selectedNote.info.todos)
   }

   function removeTodo(todoId, noteId){
    let selectedNote= notes.find(note=> note.id===noteId)
    const todoIdx= selectedNote.info.todos.findIndex(todo=> todo.id===todoId)

    selectedNote.info.todos.splice(todoIdx,1)
    utilsService.saveToStorage(KEY, notes)
    return Promise.resolve(selectedNote.info.todos)
   }