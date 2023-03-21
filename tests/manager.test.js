const Manager = require("../lib/manager");

describe('Manager', () => {
    it('should set office number property via constructor', () => {
      const manager = new Manager('Kat', 1234, 'kat@test.com', '123A');
      expect(manager.officeNumber).toEqual('123A');
    });
  
    it('should return the correct role', () => {
      const manager = new Manager('Kat', 1234, 'kat@test.com', '123A');
      expect(manager.getRole()).toEqual('Manager');
    });
  
    it('should return the correct office number', () => {
      const manager = new Manager('Kat', 1234, 'kat@test.com', '123A');
      expect(manager.getOfficeNumber()).toEqual('123A');
    });
  });