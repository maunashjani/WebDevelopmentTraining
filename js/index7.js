let student = {
    firstName: "John",
    lastName: "Doe",
    marks: 70,
    email: "john@example.com",
    address: {
        buildingName: "demo building",
        city: "demo city",
        pincode: 123456
    },
    displayMarks: function() {
        return this.marks;
    },
    displayPincode: function () {
        return this.address.pincode;
    }
};

var output = document.getElementById("output");

// output.innerHTML =
//     `${student.firstName},
// ${student.lastName},
// ${student.marks},
// ${student.email},
// ${student.address.buildingName},
// ${student.address.city},
// ${student.address.pincode}
// `;

//output.innerHTML = student.displayMarks();

output.innerHTML = student.displayPincode();