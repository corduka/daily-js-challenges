# 🎓 Exercise 5: Get Passed Students

## 📚 Description

This JavaScript exercise is designed to help you practice working with arrays, objects, loops, and conditionals. The goal is to filter students based on their grades and return only those who have passed.

## 🧠 Objective

Create a function named `getPassedStudents` that:

- Accepts an array of student objects, where each object has a `name` and a `grade`.
- Uses a `for` loop to iterate over each student.
- Checks if the student's grade is **60 or above** (the passing grade).
- For each student who passes:
  - Creates a new object with:
    - `name`: the student's name.
    - `status`: the string `"Passed"`.
  - Adds the object to a new array.
- Returns the array of passed student objects.

## 💻 Example Input

```javascript
const students = [
  { name: "Ali", grade: 87 },
  { name: "Zeynep", grade: 45 },
  { name: "Carlos", grade: 76 },
  { name: "Fatima", grade: 92 },
];
```
