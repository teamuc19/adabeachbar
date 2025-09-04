<script>
  import { enhance } from '$app/forms';
  export let form;
</script>

<svelte:head>
  <title>Register - ADA Beachbar</title>
  <script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
  <div class="w-full max-w-sm bg-white shadow rounded-lg p-6">
    <h1 class="text-2xl font-semibold text-gray-800 text-center mb-6">Create Account</h1>

    <form method="POST" action="?/register" use:enhance class="space-y-4">
      <div>
        <label for="username" class="block text-sm mb-1 text-gray-700">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          required
          value={form?.username ?? ''}
          class="w-full border rounded-md p-2 focus:ring focus:border-teal-400"
        />
      </div>

      <div>
        <label for="email" class="block text-sm mb-1 text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          value={form?.email ?? ''}
          class="w-full border rounded-md p-2 focus:ring focus:border-teal-400"
        />
      </div>

      <div>
        <label for="password" class="block text-sm mb-1 text-gray-700">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          required
          class="w-full border rounded-md p-2 focus:ring focus:border-teal-400"
        />
      </div>

      {#if form?.message}
        <p class="text-sm text-red-600">{form.message}</p>
      {/if}

      <button
        type="submit"
        class="w-full bg-teal-600 text-white rounded-md px-4 py-2 hover:bg-teal-700"
      >
        Register
      </button>
    </form>
  </div>
</div>
