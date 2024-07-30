function getListStudentsIds(objs) {
  if (!Array.isArray(objs)) return []
  const [s1, s2, s3] = objs;
  return [s1.id, s2.id, s3.id];
}

module.exports = function getListStudentsIds(objs) {
  if (!Array.isArray(objs)) return []
  return objs.map((obj, id) => obj.id);
}
