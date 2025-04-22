export default function getListStudents (id, firstName, location) {
  class Student {
    constructor(id, firstName, location) {
      this.id = id;
      this.firstName = firstName;
      this.location = location;
    }

    get id() { return this._id; }
    set id(id) { this._id = id; }
    get firstName() { return this._firstName; }
    set firstName(firstName) { this._firstName = firstName; }
    get location() { return this._location; }
    set location(location) { this._location = location; }
  }

  const s1 = new Student(1, "Guillame", "San Francisco");
  const s2 = new Student(2, "James", "Columbia");
  const s3 = new Student(3, "Serena", "San Francisco");

  return [s1, s2, s3];
}

