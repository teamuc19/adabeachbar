import { query } from './mysql.js';
import bcrypt from 'bcryptjs';

// Named Export für Login-Funktion
export async function login(email, password) {
    try {
        const users = await query('SELECT * FROM users WHERE email = ?', [email]);
        const user = users[0];

        if (!user) {
            return { success: false, message: 'User not found' };
        }

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return { success: false, message: 'Invalid password' };
        }

        // Einfacher Token für Session
        const token = `session-${user.id}-${Date.now()}`;

        return { success: true, token, user };
    } catch (err) {
        console.error('Login Error:', err);
        return { success: false, message: 'Server error' };
    }
}
