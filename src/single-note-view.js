class SingleNoteView {

  constructor(note = new Note()) {

    this.note = note

  }

  returnSingleHTMLString() {

    return '<div>' + this.note.returnText() + '</div>'

  }

}