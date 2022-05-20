const story = require("../models").story;
const authMiddleware = require("../auth/middleware");
const { Router } = require("express");
const router = new Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { spaceId, name, content, imageURL } = req.body;

    if(!spaceId || !name) {
      return res
        .status(400)
        .send({ message: "missing input" });
    }

    const newStory = await story.create({
      name: name,
      content: content,
      imageURL: imageURL,
      spaceId: spaceId
    })
    res.send(newStory.dataValues);

  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong, sorry" });
  }
})

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
