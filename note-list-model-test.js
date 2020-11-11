(function() {

    function testNoteListClassInstantiated() {
        var noteList = new NoteList();

        assert.isTrue(noteList.notes.length === 0);
    };
    testNoteListClassInstantiated();

    function returnsNotesFromArray() {
        var noteList = new NoteList();
        var note = new Note("Note 1");
        noteList.pushToNotesArray(note);

        assert.isTrue(noteList.notes.length === 1);
    };
    testNoteListClassInstantiated();


})(this);


