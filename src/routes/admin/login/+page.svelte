<script>
    import { enhance } from '$app/forms';
    export let form;
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <div class="w-full max-w-md bg-white shadow rounded-lg p-6">
        <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">Admin Login</h1>
        <form method="POST" action="?/login" use:enhance class="space-y-4">
            <input type="email" name="email" placeholder="Email" required
                   class="w-full border rounded-md p-2 focus:ring focus:border-blue-400"/>
            <input type="password" name="password" placeholder="Password" required
                   class="w-full border rounded-md p-2 focus:ring focus:border-blue-400"/>
            <button type="submit" class="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700">
                Sign In
            </button>
         
        </form>
    </div>
</div>
