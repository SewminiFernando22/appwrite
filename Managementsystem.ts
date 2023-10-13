// Define an Employee class to represent employees
class Employee {
  constructor(public id: number, public name: string, public salary: number) {}
}

// Create an array to store employee records
const employees: Employee[] = [];

// Function to add an employee to the system
function addEmployee(id: number, name: string, salary: number): void {
  const employee = new Employee(id, name, salary);
  employees.push(employee);
  console.log(`Employee ${name} added to the system.`);
}

// Function to list all employees
function listEmployees(): void {
  console.log("Employee List:");
  employees.forEach((employee) => {
    console.log(`ID: ${employee.id}, Name: ${employee.name}, Salary: $${employee.salary}`);
  });
}

// Function to calculate the total salary of all employees
function calculateTotalSalary(): number {
  return employees.reduce((total, employee) => total + employee.salary, 0);
}

// Add employees to the system
addEmployee(1, "Alice", 50000);
addEmployee(2, "Bob", 60000);
addEmployee(3, "Charlie", 75000);

// List all employees
listEmployees();

// Calculate and display the total salary
const totalSalary = calculateTotalSalary();
console.log(`Total Salary of All Employees: $${totalSalary}`);
