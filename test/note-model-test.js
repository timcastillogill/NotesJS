(function() {

    function testNoteClassInstantiated() {
        var note = new Note("anything");
        assert.isTrue(note.text === "anything");
    };
    testNoteClassInstantiated();

    function returnTextReturnsNoteText() {
        var note = new Note("I had a good day");
        assert.isTrue(note.returnText() === "I had a good day");
    };
    returnTextReturnsNoteText()

})(this);











