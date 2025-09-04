<script>
  export let data;
  let open = false;
</script>

<svelte:head>
  <title>ADA Beachbar - Menu</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">
  <style>
    body { font-family: "Inter", system-ui, sans-serif; }
    h1,h2,h3 { font-family: "Playfair Display", serif; }
  </style>
</svelte:head>

<header class="w-full bg-teal-600 text-white">
  <div class="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
    <a href="/" class="text-xl font-semibold">ADA Beachbar</a>

    <nav class="hidden md:flex items-center gap-6">
      <a href="#menu" class="hover:opacity-80">Menu</a>
      {#if data.user}
        <span class="opacity-90">{data.user.username}</span>
        <form method="POST" action="/logout">
          <button class="bg-amber-500 px-3 py-1 rounded hover:opacity-90">Logout</button>
        </form>
      {:else}
        <a href="/admin/login" class="hover:opacity-80">Login</a>
      {/if}
    </nav>

    <button class="md:hidden p-2 rounded hover:bg-teal-700" on:click={() => open = !open} aria-label="Menu">
      ☰
    </button>
  </div>

  {#if open}
    <div class="md:hidden border-t border-teal-500">
      <div class="px-4 py-3 flex flex-col gap-3">
        <a href="#menu" class="text-white">Menu</a>
        {#if data.user}
          <span>{data.user.username}</span>
          <form method="POST" action="/logout">
            <button class="bg-amber-500 px-3 py-1 rounded">Logout</button>
          </form>
        {:else}
          <a href="/admin/login" class="text-white">Login</a>
        {/if}
      </div>
    </div>
  {/if}
</header>


<section class="bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop');">
  <div class="bg-black/40">
    <div class="mx-auto max-w-6xl px-4 py-24 text-center text-white">
      <h1 class="text-5xl font-semibold">Welcome to ADA Beachbar</h1>
      <p class="mt-3 text-lg opacity-90">Fresh seafood, good vibes, ocean view.</p>
      <a href="#menu" class="mt-6 inline-block bg-amber-500 px-6 py-3 rounded font-semibold">See Menu</a>
    </div>
  </div>
</section>


<section id="menu" class="mx-auto max-w-6xl px-4 py-16">
  <h2 class="text-4xl font-semibold text-slate-800 text-center">Our Menu</h2>


  <div class="mt-10 grid md:grid-cols-2 gap-8">
 
    <article class="flex gap-4 items-center bg-white rounded-lg p-4 shadow">
      <img src="https://images.unsplash.com/photo-1535400255456-984241443b29?q=80&w=1170&auto=format&fit=crop" alt="Sandwich" class="w-28 h-20 object-cover rounded">
      <div class="flex-1">
        <h3 class="text-lg font-semibold text-slate-900">Sandwich</h3>
        <p class="text-slate-600 text-sm">Crispy bread, fresh greens.</p>
      </div>
      <span class="text-teal-600 font-bold">$8.50</span>
    </article>

    <article class="flex gap-4 items-center bg-white rounded-lg p-4 shadow">
      <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1170&auto=format&fit=crop" alt="Pizza" class="w-28 h-20 object-cover rounded">
      <div class="flex-1">
        <h3 class="text-lg font-semibold text-slate-900">Pizza Margherita</h3>
        <p class="text-slate-600 text-sm">Tomato, basil, mozzarella.</p>
      </div>
      <span class="text-teal-600 font-bold">$12.00</span>
    </article>

    <article class="flex gap-4 items-center bg-white rounded-lg p-4 shadow">
      <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1170&auto=format&fit=crop" alt="Salad" class="w-28 h-20 object-cover rounded">
      <div class="flex-1">
        <h3 class="text-lg font-semibold text-slate-900">Fresh Salad</h3>
        <p class="text-slate-600 text-sm">Seasonal veggies, light dressing.</p>
      </div>
      <span class="text-teal-600 font-bold">$9.00</span>
    </article>
  </div>


  <h3 class="mt-12 text-2xl font-semibold text-slate-800">Drinks</h3>
  <div class="mt-6 grid md:grid-cols-2 gap-8">
    <article class="flex gap-4 items-center bg-white rounded-lg p-4 shadow">
      <img src="https://images.unsplash.com/photo-1570598912132-0ba1dc952b7d?q=80&w=687&auto=format&fit=crop" alt="Spritz Aperol" class="w-28 h-20 object-cover rounded">
      <div class="flex-1">
        <h4 class="font-semibold text-slate-900">Spritz Aperol</h4>
        <p class="text-slate-600 text-sm">Refreshing & bubbly.</p>
      </div>
      <span class="text-teal-600 font-bold">$7.50</span>
    </article>

    <article class="flex gap-4 items-center bg-white rounded-lg p-4 shadow">
      <img src="https://images.unsplash.com/photo-1563811871195-3e1047be568c?q=80&w=1170&auto=format&fit=crop" alt="Rose" class="w-28 h-20 object-cover rounded">
      <div class="flex-1">
        <h4 class="font-semibold text-slate-900">Rose</h4>
        <p class="text-slate-600 text-sm">Chilled, light, beachy.</p>
      </div>
      <span class="text-teal-600 font-bold">$11.00</span>
    </article>

    <article class="flex gap-4 items-center bg-white rounded-lg p-4 shadow">
      <img src="https://images.unsplash.com/photo-1560523964-7c0a83b8f8e3?q=80&w=1170&auto=format&fit=crop" alt="Midori Sour" class="w-28 h-20 object-cover rounded">
      <div class="flex-1">
        <h4 class="font-semibold text-slate-900">Midori Sour</h4>
        <p class="text-slate-600 text-sm">Sweet & citrus.</p>
      </div>
      <span class="text-teal-600 font-bold">$15.00</span>
    </article>
  </div>
</section>


<footer class="bg-slate-900 text-white">
  <div class="mx-auto max-w-6xl px-4 py-6 text-center text-sm">
    &copy; 2025 ADA Beachbar. All rights reserved.
  </div>
</footer>
