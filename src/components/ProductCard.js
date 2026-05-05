import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/item/${item.itemname}`)}
    >
      <img src={item.image} alt={item.itemname} />
      <div className="card-body">
        <h3>{item.itemname}</h3>
      </div>
    </div>
  );
}

export default ProductCard;