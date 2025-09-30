import { Badge } from "./ui/badge";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <section className="px-4 lg:px-6 py-6">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            className={`cursor-pointer px-4 py-2 text-sm transition-all duration-200 hover:scale-105 ${
              selectedCategory === category 
                ? "bg-primary text-primary-foreground shadow-lg" 
                : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </section>
  );
}