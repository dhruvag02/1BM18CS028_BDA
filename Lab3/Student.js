// create db
use student
// create collection
db.createCollection("student")
show collections
// insert into collection
db.student.insert({
    rollNo: 19,
    age: 18,
    contact: 1234567890,
    emailID: "vineeth.cse@bmsce.ac.in"
})
db.student.find().pretty()

// inserting multiple
db.student.insertMany([
    {
        rollNo: 18,
        age: 18,
        contact: 1234567890,
        emailID: "kavya.cse@bmsce.ac.in"
    },
    
    {
        rollNo: 10,
        age: 18,
        contact: 1234567890,
        emailID: "sanjay.cse@bmsce.ac.in"   
    },
    
    {
        rollNo: 31,
        age: 18,
        contact: 1234567890,
        emailID: "nanma.cse@bmsce.ac.in"   
    }
])

//deleting a row    
db.student.remove({ 
       rollNo: 18,
        age: 18,
        contact: 1234567890,
        emailID: "kavya.cse@bmsce.ac.in"
}) 

db.student.find().pretty()

db.student.updateOne({rollNo:10},
{$set: {emailID:"sanjana.cse@bmsce.ac.in"}})

//find specific
db.student.find({rollNo:10}).pretty()

//insert and then replace
db.student.insert({
    rollNo: 11,
    age: 18,
    contact: 1234567890,
    emailID: "abc.cse@bmsce.ac.in",
    name: "ABC"
})

db.student.replaceOne({rollNo:11},
    {
        rollNo:11,
        age: 18,
        contact: 1234567890,
        emailID: "abc.cs@bmsce.ac.in",
        name: "FEM"
     })
     
db.student.find({rollNo:11}).pretty()

//find all
db.student.find().pretty()

//export
mongoexport--db=student
--collection=student
--type=csv
--fields=rollNo, age, contactNo, emailID, name
--out=C:\Softwares\mongodbOutput\students.csv
     
     
     