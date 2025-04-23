export default function getIdsSum(listOfStudents) {
  return listOfStudents.map((student) => student.id).reduce((acc, curr) => acc + curr, 0);
}
