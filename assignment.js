//1. Create array of object of students ( name age gender and marks)
studentList = [
    {
        name: "thomas",
        age: 18,
        gender: "male",
        marks: 250
    },
    {
        name: "Ashwini",
        age: 16,
        gender: "female",
        marks: 400
    },
    {
        name: "cathirne",
        gender: "female",
        marks: 300
    },
    {
        name: "mithun",
        age: 22,
        gender: "female",
        marks: 420
    },
    {
        name: "sathis",
        age: 24,
        gender: "male",
        marks: 460
    }
];




//2.Insert one student from the studentList.
let newstudentDetails = {
    name: "jaga",
    age: 22,
    gender: "male",
    marks: 410
};

studentList.push(newstudentDetails);
console.log(studentList);


//3. Adding the marks and find the average of the marks . This will we in different format.

// Method1
let totalCount = 0;
studentList.forEach(x => {
    console.log(x.marks)
    totalCount += x.marks
    //console.log(totalCount)
    studentAverage = totalCount / studentList.length;
    //console.log(studentAverage);

})


// Method2
let totalCountmethod1 = 0;
studentList.forEach(myFunction);

function myFunction(value) {
    totalCountmethod1 += value.marks
    console.log(totalCountmethod1)
    studentAverage1 = totalCountmethod1 / studentList.length;
    console.log(studentAverage1);

}