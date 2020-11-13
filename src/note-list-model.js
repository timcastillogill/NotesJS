class NoteList {
    constructor() {
        this.noteslist = []
        this.ids = {}
    }

    pushToNotesArray(note) {
        this.noteslist.push(new Note(note));
    }

    returnNoteList() {
        return this.noteslist
    }

    createNoteID() {


      this.noteslist.forEach(createObject)

      function createObject(note, index) {
       this.ids[note] = index
      }

    }

    createObject(note, index) {

      this.ids[note] = index;

    }


}