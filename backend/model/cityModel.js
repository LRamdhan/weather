import poolPg from "../config/postgreConfig.js";

const cityModel = {

  // Create table
  createTable: async () => {
    try {
      await poolPg.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
    } catch (error) {
      console.error("Error creating table:", error);
    }
  },

  // Insert data
  insertUser: async (name = 'samsudin', email = 'samsudin@gmail.com') => {
    const result = await poolPg.query(
      `
        INSERT INTO users (name, email)
        VALUES ($1, $2)
        RETURNING *;
      `,
      [name, email]
    );
    return result.rows[0];
  }

}

export default cityModel
    





// GET users
// app.get("/users", async (req, res) => {
//   try {
//     const result = await pool.query(`
//       SELECT *
//       FROM users
//       ORDER BY id;
//     `);

//     res.json(result.rows);
//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: "Database error",
//     });
//   }
// });

// // POST users
// app.post("/users", async (req, res) => {
//   try {
//     const { name, email } = req.body;

//     if (!name || !email) {
//       return res.status(400).json({
//         message: "Name and email are required",
//       });
//     }

//     const user = await insertUser(name, email);

//     res.status(201).json(user);
//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: "Failed to insert user",
//     });
//   }
// });