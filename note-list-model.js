class NoteList {
    constructor() {
        this.notes = []
    }

    pushToNotesArray(note) {
        this.notes.push(note);
    }

    returnNoteList() {
        return this.notes
    }
}