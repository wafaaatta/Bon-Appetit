import React, { useState, useEffect, useCallback, useRef } from 'react';
import { debounce } from 'lodash';
import { ChevronDownIcon, ForkKnife, SearchIcon, X } from 'lucide-react';
import Select from 'react-select';

interface Ingredient {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

interface Recipe {
  id: number;
  title: string;
  content: string;
  picture: string;
  status: string;
  category_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  category: Category;
  ingredient: Ingredient[];
}

interface SearchComponentProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
}

const EnhancedSearchComponent: React.FC<SearchComponentProps> = ({ recipes, onSelectRecipe }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<{ label: string; value: string }[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const categories = Array.from(new Set(recipes.map(recipe => recipe.category)))
    .sort((a, b) => a.name.localeCompare(b.name));

  const ingredients = Array.from(new Set(recipes.flatMap(recipe => recipe.ingredient.map(ing => ing.name))))
    .sort((a, b) => a.localeCompare(b))
    .map(ingredient => ({ label: ingredient, value: ingredient }));

  const debouncedSearch = useCallback(
    debounce((term: string, category: number | null, ingredients: { label: string; value: string }[]) => {
      const filtered = recipes.filter(recipe => 
        (category === null || recipe.category_id === category) &&
        recipe.title.toLowerCase().includes(term.toLowerCase()) &&
        (ingredients.length === 0 || ingredients.every(ing => 
          recipe.ingredient.some(recipeIng => recipeIng.name.toLowerCase() === ing.value.toLowerCase())
        ))
      );
      setFilteredRecipes(filtered);
    }, 300),
    [recipes]
  );

  useEffect(() => {
    debouncedSearch(searchTerm, selectedCategory, selectedIngredients);
  }, [searchTerm, selectedCategory, selectedIngredients, debouncedSearch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = e.target.value === '' ? null : parseInt(e.target.value, 10);
    setSelectedCategory(categoryId);
  };

  const handleIngredientsChange = (selected: any) => {
    setSelectedIngredients(selected);
  };

  const handleRecipeClick = (recipe: Recipe) => {
    onSelectRecipe(recipe);
    setIsDropdownOpen(false);
  };

  const handleInputFocus = () => {
    if (filteredRecipes.length > 0) {
      setIsDropdownOpen(true);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedIngredients([]);
    setIsDropdownOpen(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto" ref={dropdownRef}>
      <div className="flex flex-col mb-2 space-y-2">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-grow">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={handleInputFocus}
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            <SearchIcon className="absolute left-3 top-2.5 text-gray-400" size={20} />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            )}
          </div>
          <select
            value={selectedCategory ?? ''}
            onChange={handleCategoryChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all duration-300"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <Select
          isMulti
          options={ingredients}
          value={selectedIngredients}
          onChange={handleIngredientsChange}
          className="w-full"
          placeholder="Select ingredients..."
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: '#3b82f6',
              primary25: '#eff6ff',
            },
          })}
        />
      </div>
      {isDropdownOpen && filteredRecipes.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden">
          <div className="overflow-y-auto max-h-60">
            {filteredRecipes.map(recipe => (
              <div
                key={recipe.id}
                onClick={() => handleRecipeClick(recipe)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
              >
                <div className="flex items-center">
                  <ForkKnife className="mr-2 text-blue-500" size={16} />
                  <div>
                    <h3 className="font-semibold text-sm">{recipe.title}</h3>
                    <p className="text-xs text-gray-600">{recipe.category.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {searchTerm && filteredRecipes.length === 0 && (
        <div className="mt-2 text-sm text-gray-500">No recipes found</div>
      )}
    </div>
  );
};

export default EnhancedSearchComponent;