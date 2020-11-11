class NoteListView {
    constructor(noteList) {
        this.noteList = noteList;
    }

    returnHTMLString() {

      let a = this.noteList.returnNoteList().map(text => "<ul><li><div>" + text.returnText() + "</li></div></ul>" )
    
      return a[0]
      // return '<ul><li><div>' + test + '</ul></li></div>'

    }
}

