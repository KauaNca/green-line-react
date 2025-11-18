import { useState, useEffect } from "react";
import { Row, Col } from "antd";
function Index() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    buscarPromocoes();
  }, []);

  async function buscarPromocoes() {
    const response = await fetch("http://localhost:5000/produtosPromocionais");
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="border rounded p-4 mt-4 w-full">
      <span className="text-xl font-bold text-green-800">
        Promoções imperdíveis
      </span>
      <div className="" id="promocoes-container">
        {produtos.length === 0 && (
          <span className="text-gray-600 text-center text-lg font-bold block mt-4">
            Nenhum produto em promoção no momento.
          </span>
        )}
        {/* Aqui você pode mapear os produtos em promoção e exibi-los */}
        {produtos.length > 0 &&
          produtos.map((produtos) => (
            <div>
              <p>Produtos</p>
            </div>
          ))}
      </div>
      <span>Categorias</span>
      <div id="categorias-container"></div>
    </div>
  );
}
export default Index;
