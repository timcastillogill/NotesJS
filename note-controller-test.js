(function() {

  class DoubleNotelist {
    createNote() {
    }
  }

  class DoubleNoteListView {
    constructor(notelist) {
      this.noteList = notelist;
    }
    htmlString() {
      return "<ul><li><div>Favourite drink: seltzer</div></li></ul>"
    }
  }

function itMakesANewNoteController() {
    let myDoubleNoteList = new DoubleNotelist();
    let myNoteListView = new DoubleNoteListView(myDoubleNoteList)
    let myNoteController = new NoteController(myDoubleNoteList)

    assert.isTrue(myNoteController instanceof NoteController);
    }; itMakesANewNoteController();



  })(this);