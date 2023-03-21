const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("getName", () => {
      it("should return the name of the employee", () => {
        const employee = new Employee("Rose", 1, "rose@test.com");
        expect(employee.getName()).toBe("Rose");
      });
    });
  
    describe("getId", () => {
      it("should return the ID of the employee", () => {
        const employee = new Employee("Rose", 1, "rose@test.com");
        expect(employee.getId()).toBe(1);
      });
    });
  
    describe("getEmail", () => {
      it("should return the email address of the employee", () => {
        const employee = new Employee("Rose", 1, "rose@test.com");
        expect(employee.getEmail()).toBe("rose@test.com");
      });
    });
  
    describe("getRole", () => {
      it("should return the role of the employee", () => {
        const employee = new Employee("Rose", 1, "rose@test.com");
        expect(employee.getRole()).toBe("Employee");
      });
    });
  });
  
  
  
  
  
  