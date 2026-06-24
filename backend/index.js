require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/interpreter/:id", async (req, res) => {
  const interpreter = await prisma.interpreter.findUnique({
    where: { id: Number(req.params.id) },
  });

  res.json(interpreter);
});

app.get("/interpreters", async (req, res) => {
  try {
    const interpreter = await prisma.interpreter.findMany();
    res.json(interpreter);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch interpreter" });
  }
});

app.get("/messages", async (req, res) => {
  const messages = await prisma.message.findMany();
  res.json(messages);
});

app.get("/interpreter/:id/messages", async (req, res) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        interpreterId: Number(req.params.id),
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.json(messages);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Failed to fetch messages",
    });
  }
});

app.patch("/messages/:id/confirm", async (req, res) => {
  try {
    const message = await prisma.message.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        status: "confirmed",
      },
    });
    res.json(message);
  } catch (err) {
    res.status(500).json({
      error: "Failed to confirm message",
    });
  }
});

app.patch("/messages/:id/reject", async (req, res) => {
  try {
    const message = await prisma.message.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        status: "rejected",
      },
    });

    res.json(message);
  } catch (err) {
    res.status(500).json({
      error: "Failed to reject message",
    });
  }
});

app.post("/interpreter/register", async (req, res) => {
  try {
    const { name, email, password, language, phone, experience, field } =
      req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newInterpreter = await prisma.interpreter.create({
      data: {
        name,
        email,
        password: hashedPassword,
        language,
        phone,
        experience,
        field,
      },
    });
    res.json({
      message: "Interpreter registered successfully",
      data: newInterpreter,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to register interpreter" });
  }
});

app.post("/interpreter/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const interpreter = await prisma.interpreter.findUnique({
      where: {
        email,
      },
    });
    if (!interpreter) {
      return res.status(404).json({
        message: "Interpreter Not Found",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      interpreter.password,
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Wrong password",
      });
    }

    res.json({
      message: "Login successful",
      data: interpreter,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

app.post("/messages", async (req, res) => {
  console.log("BODY:", req.body); // 🔥 IMPORTANT
  try {
    const { name, email, message, interpreterId } = req.body;

    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        message,
        interpreterId: Number(interpreterId),
      },
    });

    return res.json(newMessage);
  } catch (err) {
    console.log("Prisma Error", err);
    return res.status(500).json({ error: "Failed to create message" });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
