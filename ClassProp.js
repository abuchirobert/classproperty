//Name: Abuchi Robert
//Path: Web3
//Question: Create a class that has class/static properties and methods. Show how to use/access them.

//to create a class, we go as follows

class School{
//to create class properties, we do as follows
department = "Physics"
students = 100000

//to create a static property in a class, we do as follows
static address = "Etta Agbor Roundabout, Calabar"


//so lets create method and also static methods 
//methods
lecture(){
    console.log("This lecture is boring...      This is the method")
}

static teaching(){
    console.log("This teaching is easy to understand,     This is a static method")
}


test(){
    console.log(this.department)
}
}

//to access the school properties, we then instantiate  the class to a new object like this

const school = new School
// with the school variable now, we can access the properties of the School class using the school.propertyname, where propertyname = property in the class

console.log(school.department, "--   This is the class property");

//to access the static property, the class name (School) is used, this is because(in my own understanding), the class owns the static property and no other person can be used except for it.
console.log(School.address, "--- This is the static property of the class");


//to access the method, we call the instantiated object name, and the method as follows
school.lecture() //this lecture() method was accessed using the school object
School.teaching() //this was called using the class name.
school.test()
//"this" is used to access the content of an object inside a class
