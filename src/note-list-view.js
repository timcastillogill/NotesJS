class NoteListView {
    constructor(noteList) {
        this.noteList = noteList;
    }

    returnHTMLString() {
      let opening = '<ul>'
      let closing = '</ul>'
      let a = this.noteList.returnNoteList().map(text => "<li><div>" + text.returnText() + "</div></li>").join()
    
      return opening + a + closing
      // return '<ul><li><div>' + test + '</ul></li></div>'

    }
}

