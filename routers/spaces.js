const Space = require("../models/").space;
const story = require("../models").story;
const { Router } = require("express");
const router = new Router();

router.get("/", async (req, res) => {
  try {
    const spaces = await Space.findAll();
    res.send(spaces);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const space = await Space.findByPk(id, {include: story});
    res.send(space);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
});

module.exports = router;
