<script>
    export let data; 
    let isMobileMenuOpen = false;

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    import { onMount } from 'svelte';

    function animateOnScroll() {
        if (typeof window !== 'undefined') {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            const cards = document.querySelectorAll('.menu-card');
            cards.forEach(card => observer.observe(card));
        }
    }

    onMount(animateOnScroll);
</script>

<svelte:head>
    <title>ADA Beachbar - Menu</title>
    <script src="https://cdn.tailwindcss.com"></script>
</svelte:head>


<nav class="bg-gradient-to-r from-blue-600 to-blue-400 text-white fixed w-full top-0 z-10 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          
            <div class="flex-shrink-0">
                <a href="/" class="text-2xl font-bold">ADA Beachbar</a>
            </div>

            
            <div class="hidden md:flex items-center space-x-6">
                <a href="#menu" class="hover:text-blue-200 transition">Menu</a>

                {#if data.user}
                    <span class="font-medium">{data.user.username}</span>
                    <form method="POST" action="/logout">
                        <button
                            type="submit"
                            class="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white font-medium transition"
                        >
                            Logout
                        </button>
                    </form>
                {:else}
                    <a href="/admin/login" class="hover:text-blue-200 transition">Login</a>
                  
                {/if}
            </div>

         
           
        </div>
    </div>


    {#if isMobileMenuOpen}
        <div class="md:hidden bg-blue-800">
            <div class="flex flex-col space-y-2 px-4 py-4">
                <a href="#menu" class="hover:text-blue-200">Menu</a>
                {#if data.user}
                    <span class="font-medium text-white">{data.user.username}</span>
                    <form method="POST" action="/logout">
                        <button type="submit" class="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white font-medium transition">
                            Logout
                        </button>
                    </form>
                {:else}
                    <a href="/admin/login" class="hover:text-blue-200">Login</a>
               
                {/if}
            </div>
        </div>
    {/if}
</nav>


<section class="h-screen bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop');">
    <div class="flex items-center justify-center h-full bg-black bg-opacity-40">
        <div class="text-center text-white">
            <h1 class="text-5xl font-bold mb-4">Welcome to ADA Beachbar</h1>
            <p class="text-xl mb-6">Savor fresh seafood and coastal flavors with a stunning ocean view.</p>
            <a href="#menu" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition">Explore Our Menu</a>
        </div>
    </div>
</section>


<section id="menu" class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
    <h2 class="text-4xl font-bold text-center mb-12">Our Menu</h2>

<div class="my-12">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

    <!-- shrimp scampi -->
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1535400255456-984241443b29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="shrimp scampi" 
        class="object-cover h-56 w-full"
      />
      <div class="p-4 text-center">
        <h3 class="text-lg font-semibold text-gray-800">Sandwich</h3>
        <p class="text-blue-600 font-bold">$8.50</p>
      </div>
    </div>

    <!-- Pizza -->
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Pizza" 
        class="object-cover h-56 w-full"
      />
      <div class="p-4 text-center">
        <h3 class="text-lg font-semibold text-gray-800">Pizza Margherita</h3>
        <p class="text-blue-600 font-bold">$12.00</p>
      </div>
    </div>

    <!-- Salad -->
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Salad" 
        class="object-cover h-56 w-full"
      />
      <div class="p-4 text-center">
        <h3 class="text-lg font-semibold text-gray-800">Fresh Salad</h3>
        <p class="text-blue-600 font-bold">$9.00</p>
      </div>
    </div>

  </div>
</div>







<div class="my-12">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

    <!-- spritz aperol -->
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1570598912132-0ba1dc952b7d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Coctail" 
        class="object-cover h-56 w-full"
      />
      <div class="p-4 text-center">
        <h3 class="text-lg font-semibold text-gray-800">Spritz Aperol</h3>
        <p class="text-blue-600 font-bold">$7.50</p>
      </div>
    </div>

    <!-- Rose -->
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1563811871195-3e1047be568c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Coctailll" 
        class="object-cover h-56 w-full"
      />
      <div class="p-4 text-center">
        <h3 class="text-lg font-semibold text-gray-800">Rose</h3>
        <p class="text-blue-600 font-bold">$11.00</p>
      </div>
    </div>

    <!-- Midori Sour -->
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1560523964-7c0a83b8f8e3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Midori Sour" 
        class="object-cover h-56 w-full"
      />
      <div class="p-4 text-center">
        <h3 class="text-lg font-semibold text-gray-800">Midori Sour</h3>
        <p class="text-blue-600 font-bold">$15.00</p>
      </div>
    </div>

  </div>
</div>




   
</section>

<!-- Footer -->
<footer class="bg-blue-600 text-white py-3">
    <div class="mt-2 text-center">
        <p>&copy; 2025 ADA Beachbar. All rights reserved.</p>
    </div>
</footer>
