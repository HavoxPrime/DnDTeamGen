//manager test code
const manager = require("../Employees/manager.js");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create and object with a name, id, email and, office number when provided proper arguments", () => {
      const emp = new manager("Storm", 866, "storm.morzos@gmail.com", 777);

      expect(emp.name).toEqual("Storm");
      expect(emp.id).toEqual(866);
      expect(emp.email).toEqual("storm.morzos@gmail.com");
      expect(emp.officeNum).toEqual(777);
    });

    it("should throw an err if provided no arguments", () => {
      const emp = () => new manager();

      expect(emp).toThrow();
    });
    it("should throw and err if provided a non string name", () => {
      const emp = () => new manager(121, 866, "a@gmail.com", 777);
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a string id", () => {
      const emp = () => new manager("Storm", "866", "a@gmail.com", 777);
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a negitive id", () => {
      const emp = () => new manager("Storm", -123, "a@gmail.com", 777);
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a non email", () => {
      const emp = () => new manager("storm", 866, ";alsdkjfg", 777);
      const err = new Error(
        "Expected parameter 'email' to be a valid email string"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a non string email", () => {
      const emp = () => new manager("storm", 866, 123, 777);
      const err = new Error(
        "Expected parameter 'email' to be a valid email string"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a string office number", () => {
      const emp = () => new manager("Storm", 866, "a@gmail.com", "777");
      const err = new Error(
        "Expected parameter 'officeNum' to be a non-negative number"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a negitive office number", () => {
      const emp = () => new manager("Storm", 866, "a@gmail.com", -777);
      const err = new Error(
        "Expected parameter 'officeNum' to be a non-negative number"
      );

      expect(emp).toThrowError(err);
    });
  });
  describe("getName()", () => {
    it("should return the name of the employee", () => {
      const emp = new manager("Storm", 866, "storm.morzos@gmail.com", 777);
      const nameGot = emp.getName();
      expect(nameGot).toEqual("Storm");
    });
  });
  describe("getId()", () => {
    it("should return the id of the employee", () => {
      const emp = new manager("Storm", 866, "storm.morzos@gmail.com", 777);
      const idGot = emp.getId();
      expect(idGot).toEqual(866);
    });
  });
  describe("getEmail()", () => {
    it("should return the email of the employee", () => {
      const emp = new manager("Storm", 866, "storm.morzos@gmail.com", 777);
      const emailGot = emp.getEmail();
      expect(emailGot).toEqual("storm.morzos@gmail.com");
    });
  });
  describe("getOfficeNum()", () => {
    it("should return the employees office number", () => {
      const emp = new manager("Storm", 866, "storm.morzos@gmail.com", 777);
      const numGot = emp.getOfficeNum();
      expect(numGot).toEqual(777);
    });
  });
  describe("getRoll()", () => {
    it("should return Manager", () => {
      const emp = new manager("Storm", 866, "storm.morzos@gmail.com", 777);
      const roleGot = emp.getRole();
      expect(roleGot).toEqual("Manager");
    });
  });
});
