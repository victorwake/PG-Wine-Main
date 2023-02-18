import React from "react";
import { Container, FormGroup, Input } from "reactstrap";
import { useState } from "react";
import { saveImage } from "../../redux/actions";
import { useDispatch } from "react-redux";

export const Cloudinary = () => {

    const dispatch = useDispatch();
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "images");
        setLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dsyss1x3l/image/upload",
            {
                method: "POST",
                body: data,
            }
        );
        const file = await res.json();
        console.log(res);
        setImage(file.secure_url);
        setLoading(false);
        dispatch(saveImage(file.secure_url));
        console.log(file.secure_url);
    };


    return (
        <div>
        <Container style={{textAlign: "center"}} >
            <div>
                 {loading ? (
                    <h3>Loading...</h3>
                ) : image ? (
                    <h3>Imagen cargada con exito</h3>
                ) : null}

            </div>
            <FormGroup>
                <Input 
                type="file" 
                name="file"
                placeholder="Cargar imagen"
                onChange={uploadImage}
                />
            </FormGroup>
        </Container>


        </div>
    );
}
