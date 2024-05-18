export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR"
  }).format(price)
}