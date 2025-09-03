<script>
    import { enhance } from '$app/forms';
    let { data } = $props();
</script>

<main class="min-h-screen flex items-center justify-center bg-gray-50 p-6">
    <div class="w-full max-w-lg bg-white rounded-lg shadow p-6">
        <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">Add Menu Item</h1>

        <form action="?/addItem" method="POST" use:enhance enctype="multipart/form-data" class="space-y-4">
            <label class="block">
                <span class="text-gray-700">Category</span>
                <select name="category_id" required class="w-full mt-1 border rounded-md p-2 focus:ring focus:border-blue-400">
                    <option value="">Select a category</option>
                    {#each data.categories as category}
                        <option value={category.id}>{category.name}</option>
                    {/each}
                </select>
            </label>

            <label class="block">
                <span class="text-gray-700">Item Name</span>
                <input type="text" name="name" required placeholder="e.g. Tropical Cocktail"
                       class="w-full border rounded-md p-2 focus:ring focus:border-blue-400"/>
            </label>

            <label class="block">
                <span class="text-gray-700">Description</span>
                <textarea name="description" rows="3" placeholder="Describe the item..."
                          class="w-full border rounded-md p-2 focus:ring focus:border-blue-400"></textarea>
            </label>

            <label class="block">
                <span class="text-gray-700">Price ($)</span>
                <input type="number" name="price" step="0.01" min="0" required placeholder="0.00"
                       class="w-full border rounded-md p-2 focus:ring focus:border-blue-400"/>
            </label>

            <label class="block">
                <span class="text-gray-700">Item Image</span>
                <input type="file" name="image" accept="image/*"
                       class="w-full border rounded-md p-2 file:mr-2 file:bg-blue-600 file:text-white file:px-3 file:py-1 file:rounded-md file:hover:bg-blue-700"/>
            </label>

            <button type="submit" class="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700">
                Add Item
            </button>
        </form>
    </div>
</main>
