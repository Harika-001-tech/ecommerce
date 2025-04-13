export const useAddproduct = () => {
    const addProduct = async (name, detail, category, price, company, image) => {
      try {
        const response = await fetch("http://localhost:4000/admin/add-product", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("x-auth-token")
          },
          body: JSON.stringify({
            userId: localStorage.getItem("x-auth-token"),
            name: name,
            detail: detail,
            category: category,
            price: price,
            company: company,
            image: image
          })
        });
  
        if (response.ok) {
          const responseData = await response.json(); // Parse the response body only when status is 2xx
          alert("Product added to database!");
          console.log(responseData); // Log the response for debugging
          // Optional: Redirect or update UI after successful product addition
          // Example: navigate('/products');
        } else {
          const errorData = await response.json(); // Parse the error response
          alert("There was an error adding the product.");
          console.error(errorData); // Log detailed error information
        }
      } catch (error) {
        alert("An unexpected error occurred.");
        console.error(error); // Log unexpected errors (network issues, etc.)
      }
    };
  
    return { addProduct };
};
