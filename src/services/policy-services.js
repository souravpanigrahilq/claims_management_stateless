const Policy = require("../models/policyholder");
const policy_details = require("./policy_details");

// Create
class PolicyService {
  policies = [];
  async createPolicyDets(policyData) {
    const policy = new Policy(
      policyData.id,
      policyData.policyHolderId,
      policyData.type,
      policyData.amount,
      policyData.effectiveDate,
      policyData.expirationDate
    );

    policies.push(policy);
    return "Policy details added successfully";
  }

  // Get All Policies
  async getPoliciesDets() {
    return policies;
  }

  // Get Single Policy
  async getPolicydets(id) {
    return policies.find((p) => p.id === id);
  }

  // Update Policy
  async updatePolicydets(id, updateData) {
    const policy = getPolicy(id);
    Object.assign(policy, updateData);
    return policy;
  }

  // Delete Policy
  async deletePolicy(id) {
    policies = policies.filter((p) => p.id !== id);
  }
}

module.exports = new PolicyService();
