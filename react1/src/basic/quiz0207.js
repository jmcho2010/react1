// 다음 코드의 성능을 최적화하세요.
// 불필요한 재계산과 리렌더링을 방지해야 합니다.

// 성능 개선 포인트:
// 계산 비용이 큰 필터링 작업 최적화
// 콜백 함수 안정성 확보
// 컴포넌트 리렌더링 최소화

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

//퀴즈2
// 요구사항:
// 1. 이름을 입력받는 입력창을 만드세요
// 2. 입력창 아래에 실시간으로 "안녕하세요, OOO님!" 이라고 표시됩니다
// 3. 입력값이 없을 때는 "이름을 입력해주세요" 라고 표시됩니다
// 4. 이름은 10글자를 넘을 수 없습니다

function NameForm() {
    // 여기에 코드를 작성하세요
}
// 퀴즈3
// 요구사항:
// 1. 버튼을 클릭할 때마다 배경색이 변경됩니다
// 2. 색상은 빨강 -> 파랑 -> 초록 순서로 변경됩니다
// 3. 현재 색상이 무슨 색상인지 버튼 텍스트로 표시됩니다
// 4. 배경색이 변경될 때 부드러운 전환 효과를 넣어주세요

function ColorToggle() {
    // 여기에 코드를 작성하세요
}