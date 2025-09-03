<script>
    import { enhance } from '$app/forms';
    let { data } = $props();
</script>

<section class="p-6 bg-gray-50 min-h-screen">
    <div class="max-w-6xl mx-auto space-y-8">
        <div class="text-center">
            <h1 class="text-2xl font-bold text-gray-800">Menu Management</h1>
            <a href="/admin/gallery/new" class="text-blue-600 hover:underline text-sm">+ Add New Item</a>
        </div>

        <div class="bg-white shadow rounded-lg p-6">
            <h2 class="text-lg font-semibold text-gray-800 mb-4">Add Category</h2>
            <form action="?/addCategory" method="POST" use:enhance class="grid gap-4 md:grid-cols-2">
                <input type="text" name="name" placeholder="Category Name" required
                       class="border rounded-md p-2 w-full focus:ring focus:border-blue-400"/>
                <input type="text" name="description" placeholder="Description"
                       class="border rounded-md p-2 w-full focus:ring focus:border-blue-400"/>
                <button type="submit" class="md:col-span-2 bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700">
                    Add Category
                </button>
            </form>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {#each data.menuItems as item (item.id)}
                <div class="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
                    {#if item.image_url}
                        <img src={item.image_url} alt={item.name} class="h-40 w-full object-cover"/>
                    {/if}
                    <div class="p-4">
                        <p class="text-xs text-gray-500">{item.category_name}</p>
                        <h3 class="font-semibold text-gray-800">{item.name}</h3>
                        <p class="text-sm text-gray-600 mb-2">{item.description}</p>
                        <p class="font-bold text-blue-600 mb-3">${item.price}</p>
                        <form action="?/deleteItem" method="POST" use:enhance>
                            <input type="hidden" name="id" value={item.id}/>
                            <button type="submit" class="bg-red-500 text-white rounded-md px-3 py-1 text-sm hover:bg-red-600">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
