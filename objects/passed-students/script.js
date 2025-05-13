
const students = [
    { name: "Ali", grade: 87 },
    { name: "Zeynep", grade: 45 },
    { name: "Carlos", grade: 76 },
    { name: "Fatima", grade: 92 }
  ];
  
  function getPassedStudents (students) {
    const passedStudents = []; 
    for (let i = 0; i < students.length ;i++) {
        if (students[i].grade >= 60) {
            const passedStudentsObj = {
                name: students[i].name,
                status: 'Passed',
                class: 'Cool Ones'
            }
            passedStudents.push(passedStudentsObj);
        }
    }
    return passedStudents;
  }
  console.log(getPassedStudents(students));
