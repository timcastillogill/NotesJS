(function() {

  class DoubleNoteController {
    constructor() {
      return true;
    };

    doubleGetHTML() {
      return "<ul><li><div>Favourite food: pesto</div></li></ul>";
    }
  }

function itMakesANewNoteController() {
    let myNoteController = new NoteController();
    // let myDoubleNoteList = new DoubleNotelist();
    assert.isTrue(myNoteController instanceof NoteController);
    }; itMakesANewNoteController();

    // function getHTMLfunctionOutputsFavouriteFood() {
    //   let noteList = new NoteList()
    //   noteList.noteslist = ['test']
       
    //   noteList.returnHTMLString = function() {
    //     return '<ul><li><div>test</div></li></ul>'
    //   }

    // }


  })(this);