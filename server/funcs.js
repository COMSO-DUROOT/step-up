/*
let inputID = "", inputPW = "";

function login(id, pw, email) {
    for (let uuid = 0; uuid < maxUuid; uuid++) {

    }
}

function signup(id, pw, email) {
    for (let uuid = 0; uuid < maxUuid; uuid++) {
        getID();
    }
}
*/

const express = require('express');
const bcrypt = require('bcryptjs'); // For password hashing
const jwt = require('jsonwebtoken'); // For issuing auth tokens

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// --- CONFIGURATION ---
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_duolingo_clone_key';
const PORT = process.env.PORT || 3000;

// --- MOCK DATABASE ---
// Replacing actual DB lookups for now. 
// In reality, 'password' would be a pre-hashed bcrypt string in your DB.
const MOCK_USER_DB = {
    email: "learner@owl.com",
    // This is the hashed version of the password: "SuperSecretPassword123"
    passwordHash: "$2a$10$X7mByY8vV3k1X7VvR9uKFe7pG9P6R5z3G2Y1x8V9uKFe7pG9P6R5z", 
    userId: "user_98765",
    username: "DuoFanatic",
    streakDays: 5
};

// --- LOGIN ROUTE ---
app.post('/api/v1/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Validate input presence
        if (!email || !password) {
            return res.status(400).json({ 
                success: false, 
                message: "Email and password are required." 
            });
        }

        // 2. Mock DB Lookup (Replace this with: await User.findOne({ email }))
        if (email.toLowerCase() !== MOCK_USER_DB.email) {
            return res.status(401).json({ 
                success: false, 
                message: "Invalid email or password." 
            });
        }

        // 3. Verify Password
        const isMatch = await bcrypt.compare(password, MOCK_USER_DB.passwordHash);
        if (!isMatch) {
            return res.status(401).json({ 
                success: false, 
                message: "Invalid email or password." 
            });
        }

        // 4. Generate JWT Token
        const token = jwt.sign(
            { userId: MOCK_USER_DB.userId, email: MOCK_USER_DB.email },
            JWT_SECRET,
            { expiresIn: '7d' } // Keeps them logged in for a week
        );

        // 5. Send Response
        // Frontend can store the token and use the user data to populate the UI
        return res.status(200).json({
            success: true,
            message: "Welcome back! Don't lose your streak! 🦉",
            token: token,
            user: {
                id: MOCK_USER_DB.userId,
                username: MOCK_USER_DB.username,
                streak: MOCK_USER_DB.streakDays
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ 
            success: false, 
            message: "An internal server error occurred." 
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`🦉 Duo-vibe backend humming on http://localhost:${PORT}`);
});