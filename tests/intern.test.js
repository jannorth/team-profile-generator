const Intern = require("../lib/intern");

describe('Intern', () => {
    describe('Initialization', () => {
      it('should create an object with name, id, email, and school properties', () => {
        const intern = new Intern('Audrey', 1230, 'audrey@example.com', 'University of Richmond');
    
        expect(intern.name).toEqual('Audrey');
        expect(intern.id).toEqual(1230);
        expect(intern.email).toEqual('audrey@example.com');
        expect(intern.school).toEqual('University of Richmond');
      });
    });
    
    describe('getSchool', () => {
      it('should return the school of the intern', () => {
        const intern = new Intern('Audrey', 1230, 'audrey@example.com', 'University of Richmond');
    
        expect(intern.getSchool()).toEqual('University of Richmond');
      });
    });
    
    describe('getRole', () => {
      it('should return "Intern"', () => {
        const intern = new Intern('Audrey', 1230, 'audrey@example.com', 'University of Richmond');
    
        expect(intern.getRole()).toEqual('Intern');
      });
    });
  });