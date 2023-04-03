const addProductData = (product) => {
  return async (dispatch, getState) => {
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IBB_API}`;

    const imgRes = await fetch(url, {
      method: "POST",
      body: product.image,
    });

    const imageData = await imgRes.json();
    if (imageData.success) {
      const newData = {
        ...product,
        image: imageData.data.url,
      };

      const res = await fetch(`${process.env.REACT_APP_API}/product`, {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data)
      
    }
  };
};
export default addProductData;
