const express = require("express");
const morgan = require("morgan");

// Errors
const { NotFoundError } = require("./utils/errors");

const app = express();

app.use(morgan("tiny"))
app.use(express.json());

// Routes
const giftExchangeRoutes = require("./routes/gift-exchange");

app.get("/", (req, res) => {
    res.json({
        ping: "pong"
    })
})
app.use("/gift-exchange", giftExchangeRoutes);

// Middlewares
app.use((_req, _res, next) => {
    return next(new NotFoundError());
});

app.use((error, _req, res, _next) => {
    const status = error.status || 500;
    const message = error.message || "Something wen't wrong in the application";

    return res.status(status).json({
        error: {
            status,
            message
        }
    });
});

module.exports = app;