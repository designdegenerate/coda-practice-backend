const Space = require("../models/").space;
const { Router } = require("express");

const router = new Router();

router.get("/", async(req, res) => {
  try {
    const spaces = await Space.findAll();
    res.send(spaces);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
})

module.exports = router;