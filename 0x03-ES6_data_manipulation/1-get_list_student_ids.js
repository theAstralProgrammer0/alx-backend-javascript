export default function getListStudentsIds(listOfStudents) {
  if (listOfStudents instanceof Array) { return listOfStudents.map((student) => student.id); }
  return [];
}
