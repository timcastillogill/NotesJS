(function() {

function itReturnsHTMLString() {

  let noteList = new NoteList();
  noteList.pushToNotesArray('test');
  // noteList.pushToNotesArray('second test')

  noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.returnHTMLString() === '<ul><li><div>test</div></li></ul>')
}; itReturnsHTMLString();

function onlyShowTheFirstTwentyCharacters() {
  let noteList = new NoteList();
  noteList.pushToNotesArray('Cameron has had a superb week, he loves pairing with Tim');
  let noteListView = new NoteListView(noteList);
  console.log(noteListView.returnHTMLString());
  assert.isTrue(noteListView.returnHTMLString() === '<ul><li><div>Cameron has had a su</div></li></ul>');
};onlyShowTheFirstTwentyCharacters()


})(this);
