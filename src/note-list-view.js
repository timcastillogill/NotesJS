class NoteListView {
    constructor(noteList) {
        this.noteList = noteList;
    }

    _noteSquasher(text) {
      if(text.length > 20) {
        return text.slice(0, 20);
      } else {
        return text;
      }
    };

    returnHTMLString() {
      let opening = '<ul>'
      let closing = '</ul>'

      let a = this.noteList.returnNoteList().map(text => "<li><div>" + this._noteSquasher(text.returnText()) + "</div></li>").join()
      
      return opening + a + closing
      // return '<ul><li><div>' + test + '</ul></li></div>'

    }
}

