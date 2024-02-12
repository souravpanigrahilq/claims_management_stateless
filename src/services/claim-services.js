const claim = require("../models/user");

class ClaimsService {

    claims = []; 

  
    async createClaim(claimData) {
      const claim = new Claim(
        claimData.id,
        claimData.amount,
        claimData.date
      );
      this.claims.push(claim);
      return "Claim created successfully";
    }
  
    async getClaims() {
      return this.claims;
    }
  
    async getClaim(id) {
      return this.claims.find(c => c.id === id); 
    }
  
    async updateClaim(id, updates) { 
      const claim = this.getClaim(id);
      Object.assign(claim, updates);
      return claim;
    }
  
    async deleteClaim(id) {
      this.claims = this.claims.filter(c => c.id !== id);
      return "Claim deleted successfully"; 
    }
  
  }
  
  module.exports = new ClaimsService();
