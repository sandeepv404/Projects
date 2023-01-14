const form = document.querySelector('form');
const input = document.querySelector('#new-note');
const notesList = document.querySelector('#note-list');

form.addEventListener('submit', event => {
    event.preventDefault();
    const note = input.value;
    input.value = '';

    const noteItem = document.createElement('li');
    noteItem.classList.add('note-item');
    noteItem.innerHTML = note;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', () => {
        notesList.removeChild(noteItem);
    });

    const editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.addEventListener('click', () => {
        input.value = note;
        notesList.removeChild(noteItem);
    });

    noteItem.appendChild(deleteBtn);
    noteItem.appendChild(editBtn);
    notesList.appendChild(noteItem);
});
