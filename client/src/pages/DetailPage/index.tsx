import { useParams } from 'react-router-dom';

function DetailPage() {
  const { productId } = useParams<{ productId: string }>();

  return (
    <div>
      <h1>Detail Page</h1>
      <p>상품 ID: {productId}</p>
      {/* 여기서 productId로 API 호출해서 상세 데이터 받아와 렌더링 */}
    </div>
  );
}

export default DetailPage;
