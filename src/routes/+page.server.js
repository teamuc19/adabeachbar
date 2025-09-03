import { query } from '$lib/db/mysql';

export async function load({ locals }) {
    try {
        const menuItems = await query(`
            SELECT mi.*, mc.name as category_name 
            FROM menu_items mi 
            JOIN menu_categories mc ON mi.category_id = mc.id 
            ORDER BY mc.name, mi.name
        `);

        const menuByCategory = {};
        menuItems.forEach(item => {
            if (!menuByCategory[item.category_name]) menuByCategory[item.category_name] = [];
            menuByCategory[item.category_name].push(item);
        });

        return { 
            menuByCategory,
            user: locals.user || null // hier wird User an Navbar weitergegeben
        };
    } catch (error) {
        console.error('Error loading menu data:', error);
        return { menuByCategory: {}, user: locals.user || null };
    }
};
