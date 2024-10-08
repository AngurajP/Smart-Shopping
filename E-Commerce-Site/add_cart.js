function addtocart(ProductName,image, ProductPrice) {

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: ProductName,image:image, rate: ProductPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    Swal.fire({
    title: "Item added to cart!",
    icon: "success"
    });
    console.log(ProductName,ProductPrice,image);
    
}
// purchase page
function purchase(ProductPrice) {
   localStorage.setItem('productAmount',ProductPrice);
   
    location.href = './Purchase.html';
}