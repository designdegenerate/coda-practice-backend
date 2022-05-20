const story = require("../models").story;
const { Router } = require("express");
const router = new Router();

router.delete("/:id", async (req, res) => {
  const params = req.params;
  try {
    console.log(params.id);
    const toDestroy = await story.findByPk(params.id);
    toDestroy.destroy();
    res.send(toDestroy);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
});

module.exports = router;
