function FormatPriceToPhp(price) {
  return Intl.NumberFormat("en-DE", {
    style: "currency",
    currency: "PHP",
  }).format(price);
}

export default FormatPriceToPhp;
