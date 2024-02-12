class Policy {
    constructor(id, policyHolderId, type, amount, effectiveDate, expirationDate) {
      this.id = id;
      this.policyHolderId = policyHolderId;
      this.type = type;
      this.amount = amount;
      this.effectiveDate = effectiveDate;
      this.expirationDate = expirationDate;
    }
  }
  
  
  module.exports = Policy ;
  