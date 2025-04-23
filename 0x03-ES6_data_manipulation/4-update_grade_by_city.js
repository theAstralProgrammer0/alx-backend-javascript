/*
 * [ { studentId: 5, grade: 97 }, { studentId: 6, grade: 100 } ]
 *
 * function returns an array of students for a specific city with their new grade
 *
 * If a student doesn’t have grade in newGrades, the final grade should be N/A.
 *
 * Step 1. Filter all city students
 * Step 2. Give all city students grades
 *
*/
export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents.filter((student) => student.location === city).map((cityStudent) => {
    const grades = newGrades.find((grade) => grade.studentId === cityStudent.id);
    return {
      ...cityStudent,
      grade: grades ? grades.grade : 'N/A',
    };
  });
}
