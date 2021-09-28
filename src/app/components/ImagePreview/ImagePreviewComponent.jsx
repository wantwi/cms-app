import React, { useState,useRef } from 'react'
import { Icon, Button, IconButton, Fab } from '@material-ui/core'
import Image from '../../views/members/001-man.svg'
const ImagePreviewComponent = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    const imageUploadBtn = useRef(null)

    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0])
        }
    }

    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage()
    }

    return (
        <>
            <div style={styles.container}>
                <input hidden ref={imageUploadBtn} accept="image/*" type="file" onChange={imageChange} />

                <div style={styles.preview}>
                    <img
                        src={
                            selectedImage
                                ? URL.createObjectURL(selectedImage)
                                : Image
                        }
                        style={styles.image}
                        alt=""
                    />
                    {
                      selectedImage?   <Icon color="error" onClick={removeSelectedImage}   style={styles.icon} >delete</Icon> :  <Icon onClick={()=>imageUploadBtn.current.click()}  style={styles.icon} >add_a_photo</Icon>
                    }
                   
                </div>
            </div>
        </>
    )
}

export default ImagePreviewComponent

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },
    preview: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        position:"relative"
    },
    image: {
        width: 200,
        maxHeight: 200,
        minHeight: 200,
        borderRadius: '50%',
        border: '2px dashed #cecece',
      
    },
    delete: {
        cursor: 'pointer',
        padding: 15,
        background: 'red',
        color: 'white',
        border: 'none',
    },
    icon:{
      position:"absolute",
      right:40
    }
}
