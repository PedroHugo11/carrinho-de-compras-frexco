export interface Product {
    genus: number;
    name: string;
    id: number;
    family: string;
    order: string;
    nutritions: ProductNutritions[];
    amount: number;
  }
  
interface ProductNutritions {
    carbohydrates: number;
    protein: number;
    fat: number;
    calories: number;
    sugar: number;
}