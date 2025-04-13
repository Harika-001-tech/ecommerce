import React, { useState } from "react";
import "./Myimage.css";

const Myimages = ({ imgs = [{ url: "", filename: "Default Image" }] }) => {
  const [Mainimage, setMainimage] = useState(imgs[0] || { url: "", filename: "Default Image" });

  return (
    <>
      <div className="singleimageproduct">
        {!imgs.length ? (
          <div className="error">Waiting for fetching the images</div>
        ) : (
          imgs.map((e, index) => (
            <figure key={e.id || index}>
              <img
                src={e.url}
                alt={e.filename}
                className={`pro-image ${Mainimage.url === e.url ? "active" : ""}`}
                onClick={() => setMainimage(e)}
                onError={(event) => {
                  event.target.src = "https://picsum.photos/200";
                }}
              />
            </figure>
          ))
        )}
      </div>

      <div className="mainimagearea">
        <img
          src={Mainimage.url || "https://picsum.photos/200"}
          alt={Mainimage.filename || "Default Image"}
          className="mainimagetag"
        />
      </div>
    </>
  );
};

export default Myimages;
