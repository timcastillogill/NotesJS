(function() {

    function testNoteListClassInstantiated() {
        var noteList = new NoteList();

        assert.isTrue(noteList.noteslist.length === 0);
    };
    testNoteListClassInstantiated();

    function returnsNotesFromArray() {
        var noteList = new NoteList();
        var note = new Note("Note 1");
        noteList.pushToNotesArray(note);

        assert.isTrue(noteList.noteslist.length === 1);
    };
    returnsNotesFromArray();

    function itGivesEachNoteAnID() {
      var noteList = new NoteList()
      noteList.pushToNotesArray('test')
      noteList.pushToNotesArray('example')
      
      assert.isTrue(noteList.createNoteID()['test'] === 1)
      assert.isTrue(noteList.createNoteID()['example'] === 2)

    } itGivesEachNoteAnID()


})(this);


