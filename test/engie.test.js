// engie test code
const engie = require("../Employees/engie.js");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create and object with a name, id, email and, gitUser when provided proper arguments", () => {
      const emp = new engie(
        "Storm",
        866,
        "storm.morzos@gmail.com",
        "HavoxPrime"
      );

      expect(emp.name).toEqual("Storm");
      expect(emp.id).toEqual(866);
      expect(emp.email).toEqual("storm.morzos@gmail.com");
      expect(emp.gitUser).toEqual("HavoxPrime");
    });

    it("should throw an err if provided no arguments", () => {
      const emp = () => new engie();

      expect(emp).toThrow();
    });
    it("should throw and err if provided a non string name", () => {
      const emp = () => new engie(121, 866, "a@gmail.com", "HavoxPrime");
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a string id", () => {
      const emp = () => new engie("Storm", "866", "a@gmail.com", "HavoxPrime");
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a negitive id", () => {
      const emp = () => new engie("Storm", -123, "a@gmail.com", "HavoxPrime");
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a non email", () => {
      const emp = () => new engie("storm", 866, ";alsdkjfg", "HavoxPrime");
      const err = new Error(
        "Expected parameter 'email' to be a valid email string"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a non string email", () => {
      const emp = () => new engie("storm", 866, 123, "HavoxPrime");
      const err = new Error(
        "Expected parameter 'email' to be a valid email string"
      );

      expect(emp).toThrowError(err);
    });
    it("should throw and err if provided a non string gitUser", () => {
      const emp = () => new engie("storm", 866, "storm.morzos@gmail.com", 123);
      const err = new Error(
        "Expected parameter 'gitUser' to be a non-empty string"
      );

      expect(emp).toThrowError(err);
    });
  });
  describe("getName()", () => {
    it("should return the name of the employee", () => {
      const emp = new engie(
        "Storm",
        866,
        "storm.morzos@gmail.com",
        "HavoxPrime"
      );
      const nameGot = emp.getName();
      expect(nameGot).toEqual("Storm");
    });
  });
  describe("getId()", () => {
    it("should return the id of the employee", () => {
      const emp = new engie(
        "Storm",
        866,
        "storm.morzos@gmail.com",
        "HavoxPrime"
      );
      const idGot = emp.getId();
      expect(idGot).toEqual(866);
    });
  });
  describe("getEmail()", () => {
    it("should return the email of the employee", () => {
      const emp = new engie(
        "Storm",
        866,
        "storm.morzos@gmail.com",
        "HavoxPrime"
      );
      const emailGot = emp.getEmail();
      expect(emailGot).toEqual("storm.morzos@gmail.com");
    });
  });
  describe("getGitHub()", () => {
    it("should return a link to the employees github", () => {
      const emp = new engie(
        "Storm",
        866,
        "storm.morzos@gmail.com",
        "HavoxPrime"
      );
      const gitGot = emp.getGitHub();
      expect(gitGot).toEqual("https://github.com/HavoxPrime");
    });
  });
  describe("getRoll()", () => {
    it("should return Engineer", () => {
      const emp = new engie(
        "Storm",
        866,
        "storm.morzos@gmail.com",
        "HavoxPrime"
      );
      const roleGot = emp.getRole();
      expect(roleGot).toEqual("Engineer");
    });
  });
});
