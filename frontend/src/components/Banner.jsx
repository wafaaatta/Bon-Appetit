import SearchBar from "./SearchBar";
import SearchComponent from "./SearchComponent";

const Banner = () => {

  const dummyRecipes = [
    {
      id: 1,
      title: "Classic Margherita Pizza",
      content: "1. Prepare the pizza dough and let it rise.\n2. Preheat the oven to 450°F (230°C).\n3. Roll out the dough and spread tomato sauce.\n4. Add fresh mozzarella and basil leaves.\n5. Bake for 12-15 minutes until the crust is golden.\n6. Drizzle with olive oil before serving.",
      picture: "https://via.placeholder.com/640x480.png/00ff00?text=pizza",
      status: "published",
      category_id: 2,
      user_id: 1,
      created_at: "2024-09-02T10:00:00.000000Z",
      updated_at: "2024-09-02T10:00:00.000000Z",
      category: {
        id: 2,
        name: "Italian",
        created_at: "2024-09-01T09:00:00.000000Z",
        updated_at: "2024-09-01T09:00:00.000000Z"
      },
      ingredient: [
        { id: 1, name: "Pizza dough", quantity: "1 ball" },
        { id: 2, name: "Tomato sauce", quantity: "1/2 cup" },
        { id: 3, name: "Fresh mozzarella", quantity: "200g" },
        { id: 4, name: "Fresh basil leaves", quantity: "10-12 leaves" },
        { id: 5, name: "Olive oil", quantity: "2 tbsp" }
      ]
    },
    {
      id: 2,
      title: "Spicy Thai Green Curry",
      content: "1. Heat oil in a large pot over medium heat.\n2. Add green curry paste and cook until fragrant.\n3. Pour in coconut milk and bring to a simmer.\n4. Add chicken and vegetables, cook for 15 minutes.\n5. Stir in fish sauce, sugar, and basil leaves.\n6. Serve hot with steamed rice.",
      picture: "https://via.placeholder.com/640x480.png/0000ff?text=curry",
      status: "published",
      category_id: 3,
      user_id: 2,
      created_at: "2024-09-03T11:30:00.000000Z",
      updated_at: "2024-09-03T11:30:00.000000Z",
      category: {
        id: 3,
        name: "Thai",
        created_at: "2024-09-01T09:00:00.000000Z",
        updated_at: "2024-09-01T09:00:00.000000Z"
      },
      ingredient: [
        { id: 6, name: "Green curry paste", quantity: "2 tbsp" },
        { id: 7, name: "Coconut milk", quantity: "400ml" },
        { id: 8, name: "Chicken breast", quantity: "500g" },
        { id: 9, name: "Mixed vegetables", quantity: "2 cups" },
        { id: 10, name: "Fish sauce", quantity: "2 tbsp" }
      ]
    },
    {
      id: 3,
      title: "Classic French Onion Soup",
      content: "1. Caramelize sliced onions in butter for 30-40 minutes.\n2. Add flour and cook for 1 minute.\n3. Pour in beef broth and add thyme.\n4. Simmer for 30 minutes.\n5. Ladle into oven-safe bowls.\n6. Top with bread and Gruyère cheese.\n7. Broil until cheese is melted and bubbly.",
      picture: "https://via.placeholder.com/640x480.png/ff0000?text=soup",
      status: "published",
      category_id: 4,
      user_id: 3,
      created_at: "2024-09-04T14:15:00.000000Z",
      updated_at: "2024-09-04T14:15:00.000000Z",
      category: {
        id: 4,
        name: "French",
        created_at: "2024-09-01T09:00:00.000000Z",
        updated_at: "2024-09-01T09:00:00.000000Z"
      },
      ingredient: [
        { id: 11, name: "Onions", quantity: "6 large" },
        { id: 12, name: "Butter", quantity: "50g" },
        { id: 13, name: "Beef broth", quantity: "1.5L" },
        { id: 14, name: "Gruyère cheese", quantity: "200g" },
        { id: 15, name: "Baguette", quantity: "1" }
      ]
    },
    {
      id: 4,
      title: "Homemade Sushi Rolls",
      content: "1. Cook sushi rice and season with rice vinegar.\n2. Place a nori sheet on a bamboo mat.\n3. Spread rice evenly on the nori.\n4. Add your choice of fillings.\n5. Roll tightly using the mat.\n6. Slice into 6-8 pieces.\n7. Serve with soy sauce, wasabi, and pickled ginger.",
      picture: "https://via.placeholder.com/640x480.png/ffff00?text=sushi",
      status: "published",
      category_id: 5,
      user_id: 4,
      created_at: "2024-09-05T16:45:00.000000Z",
      updated_at: "2024-09-05T16:45:00.000000Z",
      category: {
        id: 5,
        name: "Japanese",
        created_at: "2024-09-01T09:00:00.000000Z",
        updated_at: "2024-09-01T09:00:00.000000Z"
      },
      ingredient: [
        { id: 16, name: "Sushi rice", quantity: "2 cups" },
        { id: 17, name: "Nori sheets", quantity: "5" },
        { id: 18, name: "Cucumber", quantity: "1" },
        { id: 19, name: "Avocado", quantity: "1" },
        { id: 20, name: "Sashimi-grade fish", quantity: "200g" }
      ]
    },
    {
      id: 5,
      title: "Vegetarian Chickpea Curry",
      content: "1. Sauté onions, garlic, and ginger in oil.\n2. Add curry powder and tomato paste, cook for 2 minutes.\n3. Stir in chickpeas and coconut milk.\n4. Simmer for 15-20 minutes.\n5. Add spinach and cook until wilted.\n6. Serve with rice or naan bread.",
      picture: "https://via.placeholder.com/640x480.png/00ffff?text=curry",
      status: "published",
      category_id: 6,
      user_id: 5,
      created_at: "2024-09-06T12:30:00.000000Z",
      updated_at: "2024-09-06T12:30:00.000000Z",
      category: {
        id: 6,
        name: "Vegetarian",
        created_at: "2024-09-01T09:00:00.000000Z",
        updated_at: "2024-09-01T09:00:00.000000Z"
      },
      ingredient: [
        { id: 21, name: "Chickpeas", quantity: "2 cans" },
        { id: 22, name: "Coconut milk", quantity: "400ml" },
        { id: 23, name: "Curry powder", quantity: "2 tbsp" },
        { id: 24, name: "Spinach", quantity: "200g" },
        { id: 25, name: "Onion", quantity: "1 large" }
      ]
    },
    {
      id: 6,
      title: "Classic Beef Burger",
      content: "1. Mix ground beef with salt and pepper.\n2. Form into patties.\n3. Grill for 4-5 minutes each side.\n4. Toast the buns on the grill.\n5. Assemble burger with lettuce, tomato, and cheese.\n6. Add condiments of choice.",
      picture: "https://via.placeholder.com/640x480.png/ff00ff?text=burger",
      status: "published",
      category_id: 7,
      user_id: 6,
      created_at: "2024-09-07T18:00:00.000000Z",
      updated_at: "2024-09-07T18:00:00.000000Z",
      category: {
        id: 7,
        name: "American",
        created_at: "2024-09-01T09:00:00.000000Z",
        updated_at: "2024-09-01T09:00:00.000000Z"
      },
      ingredient: [
        { id: 26, name: "Ground beef", quantity: "500g" },
        { id: 27, name: "Burger buns", quantity: "4" },
        { id: 28, name: "Lettuce", quantity: "4 leaves" },
        { id: 29, name: "Tomato", quantity: "1" },
        { id: 30, name: "Cheese slices", quantity: "4" }
      ]
    },
    {
      id: 7,
      title: "Homemade Pasta Carbonara",
      content: "1. Cook pasta in salted water until al dente.\n2. Fry pancetta until crispy.\n3. Whisk eggs, cheese, and black pepper in a bowl.\n4. Drain pasta and add to pancetta.\n5. Remove from heat and quickly stir in egg mixture.\n6. Serve immediately with extra cheese.",
      picture: "https://via.placeholder.com/640x480.png/ff8000?text=pasta",
      status: "published",
      category_id: 2,
      user_id: 7,
      created_at: "2024-09-08T20:15:00.000000Z",
      updated_at: "2024-09-08T20:15:00.000000Z",
      category: {
        id: 2,
        name: "Italian",
        created_at: "2024-09-01T09:00:00.000000Z",
        updated_at: "2024-09-01T09:00:00.000000Z"
      },
      ingredient: [
        { id: 31, name: "Spaghetti", quantity: "400g" },
        { id: 32, name: "Pancetta", quantity: "150g" },
        { id: 33, name: "Eggs", quantity: "3" },
        { id: 34, name: "Pecorino cheese", quantity: "50g" },
        { id: 35, name: "Black pepper", quantity: "To taste" }
      ]
    },
    {
      id: 8,
      title: "Vegan Buddha Bowl",
      content: "1. Cook quinoa according to package instructions.\n2. Roast sweet potatoes and chickpeas with spices.\n3. Prepare fresh vegetables.\n4. Make tahini dressing.\n5. Assemble bowl with quinoa, roasted and fresh veggies.\n6. Drizzle with tahini dressing and serve.",
      picture: "https://via.placeholder.com/640x480.png/80ff00?text=bowl",
      status: "published",
      category_id: 8,
      user_id: 8,
      created_at: "2024-09-09T13:45:00.000000Z",
      updated_at: "2024-09-09T13:45:00.000000Z",
      category: {
        id: 8,
        name: "Vegan",
        created_at: "2024-09-01T09:00:00.000000Z",
        updated_at: "2024-09-01T09:00:00.000000Z"
      },
      ingredient: [
        { id: 36, name: "Quinoa", quantity: "1 cup" },
        { id: 37, name: "Sweet potato", quantity: "1 medium" },
        { id: 38, name: "Chickpeas", quantity: "1 can" },
        { id: 39, name: "Avocado", quantity: "1" },
        { id: 40, name: "Tahini", quantity: "2 tbsp" }
      ]
    },
    {
      id: 9,
      title: "Greek Moussaka",
      content: "1. Slice and salt eggplants, let sit for 30 minutes.\n2. Make meat sauce with ground lamb, tomatoes, and spices.\n3. Make béchamel sauce.\n4. Layer eggplants and meat sauce in a baking dish.\n5. Top with béchamel sauce.\n6. Bake at 180°C for 45 minutes until golden.",
      picture: "https://via.placeholder.com/640x480.png/0080ff?text=moussaka",
      status: "published",
      category_id: 9,
      user_id: 9,
      created_at: "2024-09-10T17:30:00.000000Z",
      updated_at: "2024-09-10T17:30:00.000000Z",
      category: {
        id: 9,
        name: "Greek",
        created_at: "2024-09-01T09:00:00.000000Z",
        updated_at: "2024-09-01T09:00:00.000000Z"
      },
      ingredient: [
        { id: 41, name: "Eggplants", quantity: "3 large" },
        { id: 42, name: "Ground lamb", quantity: "500g" },
        { id: 43, name: "Tomatoes", quantity: "400g can" },
        { id: 44, name: "Béchamel sauce", quantity: "2 cups" },
        { id: 45, name: "Cinnamon", quantity: "1 tsp" }
      ]
    }
  ]
  return (
    <>
      <div className="block-principal flex bg-center bg-no-repeat w-full bg-cover">
        <img
          className="bg-center bg-no-repeat w-full bg-cover"
          src="src/assets/images-ba/imagefond.png"
          alt=""
        />
        <div className="block-principal-text">
          <div>
            <h1 className="text-white">Testez Les Meilleurs Plats Sur Terre</h1>
          </div>
          <div className="text-white">
            Bienvenue sur notre site de recettes, votre destination ultime pour
            des idées culinaires inspirantes et savoureuses! Que vous soyez un
            chef expérimenté ou un cuisinier débutant, notre plateforme vous
            offre une collection variée de recettes faciles à suivre, adaptées à
            tous les goûts et occasions.
          </div>
          <SearchComponent recipes={dummyRecipes} onSelectRecipe={() => {}} />
        </div>
      </div>
    </>
  );
};
export default Banner;
