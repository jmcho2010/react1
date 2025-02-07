// 다음 코드의 성능을 최적화하세요.
// 불필요한 재계산과 리렌더링을 방지해야 합니다.

import { useState } from "react";

function ProductList({ products, onProductSelect }) {
    const [filter, setFilter] = useState("");
  
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    const handleSelect = (productId) => {
      onProductSelect(productId);
    };
  
    return (
      <div>
        <input
          value={filter}
          onChange={e => setFilter(e.target.value)}
          placeholder="검색..."
        />
        {filteredProducts.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onSelect={handleSelect}
          />
        ))}
      </div>
    );
  }
  
  const ProductItem = ({ product, onSelect }) => {
    return (
      <div onClick={() => onSelect(product.id)}>
        {product.name} - ${product.price}
      </div>
    );
  };