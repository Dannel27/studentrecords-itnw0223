function displayStudInfo() {
  // XML file
  fetch("student_data.xml")
    .then(response => response.text())
    .then(xmlString => {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(xmlString, "text/xml");

      // Get all student elements
      var studEl = xmlDoc.getElementsByTagName("student");

      // Create an empty array
      var students = [];

      for (let i = 0; i < studEl.length; i++) {
        var student = studEl[i];

        // Get name, idNum, & grade elements
        var idNum = student.getElementsByTagName("idNum")[0].textContent;
        var name = student.getElementsByTagName("name")[0].textContent;
        var age = student.getElementsByTagName("age")[0].textContent;
        var gender = student.getElementsByTagName("gender")[0].textContent;
        var grade = student.getElementsByTagName("grade")[0].textContent;
        var course = student.getElementsByTagName("course")[0].textContent;
        var address = student.getElementsByTagName("address")[0].textContent;

        // Create stud object & add to array
        var studentInfo = {
          idNum,
          name,
          age,
          gender,
          grade,
          course,
          address
        };
        students.push(studentInfo);
      }

      // Update HTML with stud info
      var studDataDiv = document.getElementById("studentData");
      studDataDiv.innerHTML = "";

      students.forEach(student => {
        var studDivInfo = document.createElement("div");
        studDivInfo.classList.add("student-info");

        // Populate stud info
          studDivInfo.innerHTML =
          "<p>Id Number: <span>" + student.idNum + "</span></p>" +
          "<p>Name: <span>" + student.name + "</span></p>" +
          "<p>Age: <span>" + student.age + "</span></p>" +
          "<p>Gender: <span>" + student.gender + "</span></p>" +
          "<p>Grade: <span>" + student.grade + "</span></p>" +
          "<p>Course: <span>" + student.course + "</span></p>" +
          "<p>Address: <span>" + student.address + "</span></p>"+
          "<p><br> </br></p>";

        // Append stud info to the "studentData" div
        studDataDiv.appendChild(studDivInfo);
      });
    })
}

// display stud info button
var button = document.getElementById("buttonInfo");
button.addEventListener("click", displayStudInfo);

  