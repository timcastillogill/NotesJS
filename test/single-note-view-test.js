(function() {

  function itReturnsAHTMLStringForASpecificNote() {

    let singleNoteView = new SingleNoteView(new Note('test'))
    
    assert.isTrue(singleNoteView.returnSingleHTMLString() === '<div>test</div>')
   } itReturnsAHTMLStringForASpecificNote();

})(this);