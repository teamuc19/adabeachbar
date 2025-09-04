import { query } from '$lib/db/mysql';
import bcrypt from 'bcryptjs';
import { redirect, fail } from '@sveltejs/kit';

export async function load({ locals }) {
  // Falls schon eingeloggt -> direkt zur Startseite
  if (locals.user) {
    throw redirect(302, '/');
  }
  return {};
}

export const actions = {
  register: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = (data.get('username') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const password = (data.get('password') || '').toString();

    if (!username || !email || !password) {
      return fail(400, {
        message: 'All fields are required',
        username,
        email
      });
    }

    try {
      // Prüfen ob es die Email schon gibt
      const existing = await query('SELECT id FROM users WHERE email = ?', [email]);
      if (existing.length > 0) {
        return fail(400, { message: 'Email already registered', username, email });
      }

      const hash = await bcrypt.hash(password, 10);

      // neuen User speichern
      const result = await query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, hash]
      );

      const userId = result.insertId;

      // einfacher Session-Token
      const token = `session-${userId}-${Date.now()}`;

      // Cookie setzen (hier schon eingeloggt)
      cookies.set('session', token, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: false, // für Produktion true setzen
        maxAge: 60 * 60 * 24 * 7
      });

      // ggf. auch in DB speichern -> Token Tabelle, aber hier simpel

      throw redirect(303, '/'); // nach Home-Seite
    } catch (err) {
      console.error('Register error:', err);
      return fail(500, { message: 'Server error', username, email });
    }
  }
};
