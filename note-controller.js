class NoteController {
    constructor(noteList) {
        this.noteList = new NoteList();
        this.noteList.pushToNotesArray("Favourite drink: seltzer");
        this.noteListView = new NoteListView(this.noteList);
    }
    getHTML() {
      let element = document.getElementById("app");
      element.innerHTML = this.noteListView.returnHTMLString();
    }
}
let myNoteController = new NoteController();
myNoteController.getHTML();
