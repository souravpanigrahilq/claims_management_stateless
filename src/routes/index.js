const express = require("express");

const router = express.Router();

// const { ClaimService } = require("../services/claim-services");

const Policy_service = require("../services/policy-services");

const Policy_Details = require("../services/policy_details");

const UserService = require("../services/user-services");

router.post("/user", async (req, res) => {
  console.log("hi");
  const user = await UserService.createUser(req);
  res.status(201).json(user);
});

router.get("/user", async (req, res) => {
  const users = await UserService.getAllUsers();
  res.json(users);
});

router.get('/policiesdets', async (req, res) => {
  const policies = await Policy_Details.getPolicies();
  res.json(policies);
});


router.post("/policy", async(req,res)=>{
  const policies=await Policy_service.createPolicy();
})

// router.post("/claim", ClaimService);


module.exports = router;
