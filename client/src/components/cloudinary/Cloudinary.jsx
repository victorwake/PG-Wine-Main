import React from "react";
import { Container, FormGroup, Input } from "reactstrap";
import { useState } from "react";
import { saveImage } from "../../redux/actions";
import { useDispatch } from "react-redux";

export const Cloudinary = () => {

    const dispatch = useDispatch();
    const [image, setImage] = useState("");
    // const [loading, setLoading] = useState(false);

    // const uploadImage = async (e) => {
    //     const files = e.target.files;
    //     const data = new FormData();
    //     data.append("file", files[0]);
    //     data.append("upload_preset", "images");
    //     setLoading(true);
    //     const res = await fetch(
    //         "https://api.cloudinary.com/v1_1/dsyss1x3l/image/upload",
    //         {
    //             method: "POST",
    //             body: data,
    //         }
    //     );
    //     const file = await res.json();
    //     console.log(res);
    //     setImage(file.secure_url);
    //     setLoading(false);
    //     dispatch(saveImage(file.secure_url));
    //     console.log(file.secure_url);
    // };

    const handleOpenWidget = () => {
        var myWidget = window.cloudinary.createUploadWidget(
            {
            cloudName: 'dsyss1x3l', 
            uploadPreset: 'images'
            }, 
            (error, result) => { 
              if (!error && result && result.event === "success") { 
                setImage((prev) => [...prev, {url: result.info.url, public_id: result.info.public_id}])
                console.log(result.info.url)
                
              }
            }
            )
        myWidget.open()
        }



    return (
        <div>
        {/* <Container style={{textAlign: "center"}} >
            <h1>
                Subiendo imagenes
            </h1>
            <FormGroup>
                <Input 
                type="file" 
                name="file"
                placeholder="Cargar imagen"
                onChange={uploadImage}
                />
            </FormGroup>
        </Container> */}

<button type = 'file' id="upload_widget" class="cloudinary-button" onClick={() => handleOpenWidget()}>Subir Imagen del producto</button>

        </div>
    );
}
