const Engineer = require("../lib/engineer");


describe('Engineer', () => {
    describe('Initialization', () => {
      it('should create an object with name, id, email, and github properties', () => {
        const engineer = new Engineer('Janna', 12345, 'none@none.com', 'jannorth-github');
    
        expect(engineer.name).toEqual('Janna');
        expect(engineer.id).toEqual(12345);
        expect(engineer.email).toEqual('none@none.com');
        expect(engineer.github).toEqual('jannorth-github');
      });
    });
    
    describe('getGithub', () => {
      it('should return the GitHub username of the engineer', () => {
        const engineer = new Engineer('Janna', 12345, 'none@none.com', 'jannorth-github');
    
        expect(engineer.getGithub()).toEqual('jannorth-github');
      });
    });
    
    describe('getRole', () => {
      it('should return "Engineer"', () => {
        const engineer = new Engineer('Janna', 12345, 'none@none.com', 'jannorth-github');
    
        expect(engineer.getRole()).toEqual('Engineer');
      });
    });
  });
  
  
  
  
  
  