(function() {

function itReturnsHTMLString() {

  let noteList = new NoteList();
  noteList.pushToNotesArray('test');
  // noteList.pushToNotesArray('second test')

  noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.returnHTMLString() === '<ul><li><div>test</div></li></ul>')
}; itReturnsHTMLString();
})(this);
