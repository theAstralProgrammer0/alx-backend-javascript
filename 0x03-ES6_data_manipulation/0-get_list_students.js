class Students {
  constructor(id, firstName, location) {
    this.id = id;
    this.firstName = firstName;
    this.location = location;
  }
}

function getListStudents() {
  const s1 = new Students(1, 'Guillame', 'San Francisco');
  const s2 = new Students(2, 'James', 'Columbia');
  const s3 = new Students(5, 'Serena', 'San Francisco');
  return [s1, s2, s3];
}

export default getListStudents;
