const students = [
  { name: 'Ana', grade: 9 },
  { name: 'Mihai', grade: 7 },
  { name: 'Victor', grade: 4 },
  { name: 'Elena', grade: 10 },
  { name: 'Daniel', grade: 5 },
];

const studentList = document.getElementById('studentList');
const showStudents = document.getElementById('showStudents');
const showPassed = document.getElementById('showPassed');

function renderStudents(data) {
  studentList.innerHTML = '';

  data.forEach((student) => {
    const card = document.createElement('div');
    card.className = 'student-card';

    card.innerHTML = `
<h3>${student.name}</h3>
<p>Nota: ${student.grade}</p>
`;

    studentList.appendChild(card);
  });
}

showStudents.addEventListener('click', () => {
  renderStudents(students);
});

showPassed.addEventListener('click', () => {
});

renderStudents(students);