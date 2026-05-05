import ProductCard from "./ProductCard";

function CategorySection({ title, items }) {
  return (
    <div className="category">
      <h2 className="category-title">
        {title} ({items.length})
        </h2>
      <div className="grid">
        {items.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;