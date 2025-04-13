import React, { useState } from 'react'
import Adminsidebar from '../Components/AdminSidebar/Adminsidebar'
import './Addproduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useAddproduct } from '../../../hooks/useAddproduct'
import axios from 'axios'

const Addproduct = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [imageUrlsToShow, setImageUrlsToShow] = useState([]);
  const [name, setName] = useState(""); 
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const { addProduct } = useAddproduct();
  const [isUploading, setIsUploading] = useState(false);  // To track if the images are still uploading

  const handleImage = async (e) => {
    if (!selectedFiles) return;

    setIsUploading(true);  // Start uploading

    const filesUploaded = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      let formData = new FormData();
      formData.append('file', selectedFiles[i]);
      formData.append("upload_preset", "qouutdij");

      try {
        const response = await axios.post("https://api.cloudinary.com/v1_1/dwkmxsthr/upload", formData, {
          onUploadProgress: (ProgressEvent) => {
            console.log("Uploading...", Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + "%");
          }
        });
        filesUploaded.push(response.data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    setImageUrlsToShow(filesUploaded);
    setIsUploading(false);  // Stop uploading
  }

  const showdata = async (e) => {
    e.preventDefault();

    if (!name || !detail || !price || !category || !company || imageUrlsToShow.length === 0) {
      alert("Please fill all fields and upload at least one image.");
      return;
    }

    await addProduct(name, detail, category, price, company, imageUrlsToShow);
    console.log({ name, detail, company, category, price, imageUrlsToShow });
  }

  return (
    <>
      <div className="add-main">
        <Adminsidebar />
        <div className="add-form-data">
          <h1 className='add-heading'>Add Product 🔔</h1>
          <p className='heading-p'>
sample text          </p>

          <div className="border"></div>
          <form onSubmit={showdata}>
            <div className="product-form">
              <div className="textfeild">
                <h5>Product Name 🛒</h5>
                <input type='text' className='addproducttext' placeholder="Canon Shirt " onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="textfeild">
                <h5>Product Detail 📢</h5>
                <input type='text' className='addproducttext' placeholder="Denim shirt with silk design " onChange={(e) => setDetail(e.target.value)} />
              </div>
              <div className="textfeild">
                <h5>Product Price💸</h5>
                <input type='text' className='addproducttext' placeholder="999 " onChange={(e) => setPrice(e.target.value)} />
              </div>
              <div className="textfeild">
                <h5>Product Company 🏛️</h5>
                <input type='text' className='addproducttext' placeholder="Canon " onChange={(e) => setCompany(e.target.value)} />
              </div>
              <div className="textfeild">
                <h5>Product Category 🌩️</h5>
                <div className="admin-dropdown">
                  <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Clothes">Clothes 👔</option>
                    <option value="Gadgets">Gadgets 💻</option>
                    <option value="Electronics">Electronics 🪫</option>
                  </select>
                </div>
              </div>
              <div className="textfeild">
                <h5>Add Product Images</h5>
                <input type='file' multiple className='addproducttext' onChange={(e) => setSelectedFiles(e.target.files)} />
              </div>
              <div className="show-button">
                <div onClick={handleImage} className="show">
                  <FontAwesomeIcon icon={faPlay} style={{ color: "#131416" }} />
                  <h6>Show Images</h6>
                </div>
              </div>
              <div className="textfeild">
                <input className='submitbutton' type="submit" value="Enlist Now 🗾" disabled={isUploading} />
              </div>
            </div>
          </form>

          <div className="image-part">
            {imageUrlsToShow?.length > 0 ? imageUrlsToShow.map((e, index) => (
              <img src={e} alt="clodinary product" key={index} className='pro-image' />
            )) : <p>Please Select Some Images</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Addproduct;
