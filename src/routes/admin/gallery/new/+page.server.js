
import { query } from '$lib/db/mysql.js';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get('title');
    const imageUrl = formData.get('imageUrl');

    try {
      await query('INSERT INTO gallery (title, imageUrl) VALUES (?, ?)', [title, imageUrl]);
      return { success: true };
    } catch (err) {
      console.error('Gallery Fehler:', err);
      return { success: false, message: 'Serverfehler beim Speichern' };
    }
  }
};
