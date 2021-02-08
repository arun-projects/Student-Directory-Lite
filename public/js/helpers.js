var getAllStudents = function() {
  return $.ajax({
    type: "GET",
    url: "/students"
  })
  .then(function(students) {
    return students;
  });
}

var getOneStudent = function(studentId) {
  return $.ajax({
    type: "GET",
    url: "/students/" + studentId
  })
  .then(function(student) {
    return student;
  });
}

var saveNewStudent = function(studentObj, cb) {
  return $.ajax({
    type: "POST",
    url: "/students",
    data: studentObj
  })
  .then(function(newStudent) {
    if (cb) {
      return cb(newStudent);
    }
  });
}

var updateStudent = function(studentId, studentObj, cb) {
  return $.ajax({
    type: "PUT",
    url: "/students/" + studentId,
    data: studentObj
  })
  .then(function() {
    if (cb) {
      return cb();
    }
  });
}

var deleteStudent = function(studentId, cb) {
  return $.ajax({
    type: "DELETE",
    url: "/students/" + studentId
  })
  .then(function() {
    if (cb) {
      return cb();
    }
  });
}
