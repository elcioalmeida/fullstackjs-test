import express from "express";
import pgp from "pg-promise";

const app = express();

// postgres://username:password@host:port/dbname
const connection = pgp()("postgres://postgres:docker@localhost:5432/branas");

app.get("/boards", async function (req, res) {
    const boards = await connection.query("select * from board", []);
    console.log(boards);
    res.json(boards);
});
app.get("/boards", async function (req, res) {
    const boards = await connection.query("select * from board", []);
    console.log(boards);
    res.json(boards);
});
app.listen(3000);