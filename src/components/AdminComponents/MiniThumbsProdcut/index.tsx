import { Container } from "./styles";

export function MiniThumbsProducts() {
  const data = [
    {
      id: 1,
      name: "jacket",
      image: "/images/jacket.png",
    },
    {
      id: 2,
      name: "dress",
      image: "/images/dress.png",
    },
    {
      id: 3,
      name: "pants",
      image: "/images/pants.png",
    },
    {
      id: 4,
      name: "shirt",
      image: "/images/shirt.png",
    },
    {
      id: 4,
      name: "sweater",
      image: "/images/sweater.png",
    }
  ]

  let showing = 4;

  return(
    <Container>
      {
        data.length > showing ? (
          data.slice(0, showing).map(product => (
            <img key={product.id} src={product.image} alt={product.name} />
          ))
        ) : (
          data.map(product => (
            <img key={product.id} src={product.image} alt={product.name} />
          ))
        )
      }
      {data.length > showing && (
        <>
          <div className="plusThenFour">+{data.length - showing}</div>
        </>
      )}
    </Container>
  )
}
