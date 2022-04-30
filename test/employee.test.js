// employee test code
const employee = require("../Employees/employee.js");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create and object with a name, id and, email when provided proper arguments", () => {
      const emp = new employee("Storm", 866, "storm.morzos@gmail.com");

      expect(emp.name).toEqual("Storm");
      expect(emp.id).toEqual(866);
      expect(emp.email).toEqual("storm.morzos@gmail.com");
    });

    it("should throw an err if provided no arguments", () => {
      const emp = () => new employee();

      expect(emp).toThrow();
    });
    it("should throw and err if provided a non string name", () => {
      const emp = () => new employee(121, 866, "a@gmail.com");
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a string id", () => {
      const emp = () => new employee("Storm", "866", "a@gmail.com");
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a negitive id", () => {
      const emp = () => new employee("Storm", -123, "a@gmail.com");
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a non email", () => {
      const emp = () => new employee("storm", 866, ";alsdkjfg");
      const err = new Error(
        "Expected parameter 'email' to be a valid email string"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a non string email", () => {
      const emp = () => new employee("storm", 866, 123);
      const err = new Error(
        "Expected parameter 'email' to be a valid email string"
      );

      expect(emp).toThrowError(err);
    });
  });
  // for the functions
  describe("getName()", () => {
    it("should return the name of the employee", () => {
      const emp = new employee("Storm", 866, "storm.morzos@gmail.com");
      const nameGot = emp.getName();
      expect(nameGot).toEqual("Storm");
    });
  });
  describe("getId()", () => {
    it("should return the id of the employee", () => {
      const emp = new employee("Storm", 866, "storm.morzos@gmail.com");
      const idGot = emp.getId();
      expect(idGot).toEqual(866);
    });
  });
  describe("getEmail()", () => {
    it("should return the email of the employee", () => {
      const emp = new employee("Storm", 866, "storm.morzos@gmail.com");
      const emailGot = emp.getEmail();
      expect(emailGot).toEqual("storm.morzos@gmail.com");
    });
  });
  describe("getRoll()", () => {
    it("should return employee", () => {
      const emp = new employee("Storm", 866, "storm.morzos@gmail.com");
      const roleGot = emp.getRole();
      expect(roleGot).toEqual("Employee");
    });
  });
});
