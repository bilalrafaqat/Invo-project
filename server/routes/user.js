module.exports = app  => {
    const user = require("../controller/userController");
    var router = require ("express").Router();

    router.post("/", user.create);

    router.get("/sms", user.findAll);

    router.get("/:id", user.findOne);

    router.put("/:id", user.update);

    router.delete("/:id", user.delete);

    router.delete("/", user.deleteAll);

    app.use("/api/users", router);
};