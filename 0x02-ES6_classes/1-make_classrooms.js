class ClassRoom {
  constructor(_maxStudentsSize) {
    this._maxStudentsSize = _maxStudentsSize;
  }
}

const InitializeRooms = () => {
  const Room1 = new ClassRoom(19);
  const Room2 = new ClassRoom(20);
  const Room3 = new ClassRoom(34);
  return [Room1, Room2, Room3];
};

export default InitializeRooms;
