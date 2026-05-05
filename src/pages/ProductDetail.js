import { useParams, useNavigate } from "react-router-dom";
import data from "../data/items.json";

function ProductDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

  const item = data.find((i) => i.itemname === name);

  if (!item) return <h2>Item not found</h2>;

  return (
    <div className="detail">

      {/* Header section for back button */}
      <div className="detail-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>

      {/* Image */}
      <div className="image-container">
        <img src={item.image} alt={item.itemname} />
      </div>

      {/* Title */}
      <h1>{item.itemname}</h1>
      <h3 className="category-label">{item.category}</h3>

      {/* Properties */}
      <div className="props">
        {item.itemprops.map((prop, index) => (
          <div key={index} className="prop">
            <span>{prop.label}</span>
            <span>{prop.value}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ProductDetail;