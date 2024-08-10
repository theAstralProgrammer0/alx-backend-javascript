const getStudentIdsSum = (students) => {
  const ids = students.map((student) => student.id);
  console.log(ids)
  const sum = ids.reduce((acc,curr) => {acc+curr}, 0);
  return sum
}; 

export default getStudentIdsSum;
