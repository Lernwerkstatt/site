const express = require("express");

const { getIndex } = require("../controllers/home");

const router = express.Router();

router.get("/", getIndex);

module.exports = { router };
