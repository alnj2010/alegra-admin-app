import apiKitchen from "@/api/apiKitchen"

function mapRecipesToTreeview(recipes) {
    return recipes.map(item => ({
        id: item.id,
        title: item.name_recipe,
        children: item.ingredients.map(item => ({
            id: item.id,
            title: `${item.name_ingredient} ${item.pivot.quantity}`,
        }))
    }))
}

export default async function getAllRecipes() {
    const recipes = await apiKitchen.getRecipes();
    return mapRecipesToTreeview(recipes);

}