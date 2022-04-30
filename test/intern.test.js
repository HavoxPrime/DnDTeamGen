//intern test code
const intern = require("../Employees/intern.js");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create and object with a name, id, email and, school when provided proper arguments", () => {
      const emp = new intern(
        "Storm",
        866,
        "storm.morzos@gmail.com",
        "Denver Uni"
      );

      expect(emp.name).toEqual("Storm");
      expect(emp.id).toEqual(866);
      expect(emp.email).toEqual("storm.morzos@gmail.com");
      expect(emp.school).toEqual("Denver Uni");
    });

    it("should throw an err if provided no arguments", () => {
      const emp = () => new intern();

      expect(emp).toThrow();
    });
    it("should throw and err if provided a non string name", () => {
      const emp = () => new intern(121, 866, "a@gmail.com", "Denver Uni");
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a string id", () => {
      const emp = () => new intern("Storm", "866", "a@gmail.com", "Denver Uni");
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a negitive id", () => {
      const emp = () => new intern("Storm", -123, "a@gmail.com", "Denver Uni");
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a non email", () => {
      const emp = () => new intern("storm", 866, ";alsdkjfg", "Denver Uni");
      const err = new Error(
        "Expected parameter 'email' to be a valid email string"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a non string email", () => {
      const emp = () => new intern("storm", 866, 123, "Denver Uni");
      const err = new Error(
        "Expected parameter 'email' to be a valid email string"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a non string school", () => {
      const emp = () => new intern("storm", 866, "storm.morzos@gmail.com", 123);
      const err = new Error(
        "Expected parameter 'school' to be a non-empty string"
      );

      expect(emp).toThrowError(err);
    });
  });
  describe("getName()", () => {
    it("should return the name of the employee", () => {
      const emp = new intern(
        "Storm",
        866,
        "storm.morzos@gmail.com",
        "Denver Uni"
      );
      const nameGot = emp.getName();
      expect(nameGot).toEqual("Storm");
    });
  });
  describe("getId()", () => {
    it("should return the id of the employee", () => {
      const emp = new intern(
        "Storm",
        866,
        "storm.morzos@gmail.com",
        "Denver Uni"
      );
      const idGot = emp.getId();
      expect(idGot).toEqual(866);
    });
  });
  describe("getEmail()", () => {
    it("should return the email of the employee", () => {
      const emp = new intern(
        "Storm",
        866,
        "storm.morzos@gmail.com",
        "Denver Uni"
      );
      const emailGot = emp.getEmail();
      expect(emailGot).toEqual("storm.morzos@gmail.com");
    });
  });
  describe("getSchool()", () => {
    it("should return the employees school", () => {
      const emp = new intern(
        "Storm",
        866,
        "storm.morzos@gmail.com",
        "Denver Uni"
      );
      const schoolGot = emp.getSchool();
      expect(schoolGot).toEqual("Denver Uni");
    });
  });
  describe("getRoll()", () => {
    it("should return Intern", () => {
      const emp = new intern(
        "Storm",
        866,
        "storm.morzos@gmail.com",
        "Denver Uni"
      );
      const roleGot = emp.getRole();
      expect(roleGot).toEqual("Intern");
    });
  });
});
