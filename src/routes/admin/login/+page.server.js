import { login } from '$lib/db/auth';
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {

    if (locals.user) {
        throw redirect(302, '/admin/gallery');
    }
}

export const actions = {
    login: async ({ request, cookies }) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');
        
        // Basic validation
        if (!email || !password) {
            return { success: false, message: 'Email and password are required' };
        }
        
       
        const result = await login(email, password);
        
        if (result.success) {
           
            cookies.set('session', result.token, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 7 
            });
            
            throw redirect(303, '/admin/gallery');
        }
        
        return result;
    }
};


