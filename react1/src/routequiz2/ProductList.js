import {Link} from 'react-router-dom';
const products = [
    { id: 1, name: '노트북', price: 1000000 },
    { id: 2, name: '스마트폰', price: 800000 },
    { id: 3, name: '태블릿', price: 600000 }
  ];

function ProductList(){

    return(
        <div>
            <h1>상품 목록</h1>
            {products.map(product =>(
              <div key={product.id} style={{ 
                margin: '10px', padding: '10px', border: '1px solid crimson'
                }}>

                <h3></h3>
                <p></p>

              </div>  
            ))}
        </div>
    );

}

export default ProductList;
