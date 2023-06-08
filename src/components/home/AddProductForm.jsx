import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/shop/actions';

const initialFormData = {
  name: '',
  category: '',
  img: '',
  price: '',
  quantity: '',
};

const AddProductForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'price') {
      const parsedValue = parseFloat(value);
      setFormData({ ...formData, [name]: parsedValue });
    } else if (name === 'quantity') {
      const parsedValue = parseInt(value);
      setFormData({ ...formData, [name]: parsedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
    const { price, quantity } = formData;
    if (typeof price === 'number' && typeof quantity === 'number') {
      if (quantity % 1 === 0) {
        dispatch(addProduct({ ...formData }));
        setFormData(initialFormData);
      } else {
        alert('Please input a valid quantity');
      }
    }
  };

  return (
    <>
      {/* <!-- Product Input Form --> */}
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          onSubmit={handleOnsubmit}
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm">
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              onChange={handleOnchange}
              className="addProductInput"
              id="lws-inputName"
              name="name"
              value={formData.name}
              type="text"
              required
            />
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              onChange={handleOnchange}
              className="addProductInput"
              id="lws-inputCategory"
              name="category"
              value={formData.category}
              type="text"
              required
            />
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              onChange={handleOnchange}
              className="addProductInput"
              id="lws-inputImage"
              name="img"
              value={formData.img}
              type="text"
              required
            />
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                onChange={handleOnchange}
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                value={formData.price}
                name="price"
                required
              />
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                onChange={handleOnchange}
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                value={formData.quantity}
                name="quantity"
                required
              />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button
            type="submit"
            id="lws-inputSubmit"
            className="submit">
            Add Product
          </button>
        </form>
      </div>
      {/* <!-- Product Input Form Ends --> */}
    </>
  );
};

export default AddProductForm;
