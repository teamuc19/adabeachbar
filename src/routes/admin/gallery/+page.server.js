
import { query } from '$lib/db/mysql.js';
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
    if (!locals.user) {
        throw redirect(302, '\admin\login');
    }

    try {
        // Get menu items with category names
        const menuItems = await query(`
            SELECT mi.*, mc.name as category_name 
            FROM menu_items mi 
            JOIN menu_categories mc ON mi.category_id = mc.id
            ORDER BY mc.name, mi.name
        `);

        // Get categories for dropdown
        const categories = await query('SELECT * FROM menu_categories ORDER BY name');

        return {
            menuItems,
            categories,
            user: locals.user
        };
    } catch (error) {
        console.error('Error loading menu items:', error);
        return {
            menuItems: [],
            categories: [],
            user: locals.user,
            error: 'Failed to load menu items'
        };
    }
}

export const actions = {
    deleteItem: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        try {
            await query('DELETE FROM menu_items WHERE id = ?', [id]);
            return { success: true, message: 'Item deleted successfully' };
        } catch (error) {
            console.error('Error deleting item:', error);
            return { success: false, error: 'Failed to delete item' };
        }
    },

    addCategory: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const description = formData.get('description');

        try {
            await query(
                'INSERT INTO menu_categories (name, description) VALUES (?, ?)',
                [name, description]
            );
            return { success: true, message: 'Category added successfully' };
        } catch (error) {
            console.error('Error adding category:', error);
            return { success: false, error: 'Failed to add category' };
        }
    }
};