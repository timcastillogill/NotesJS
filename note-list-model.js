class NoteList {
    constructor() {
        this.noteslist = []
    }

    pushToNotesArray(note) {
        this.noteslist.push(new Note(note));
    }

    returnNoteList() {
        return this.noteslist
    }
}