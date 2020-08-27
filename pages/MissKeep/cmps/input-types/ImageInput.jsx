export function ImageInput(props){


    return (
        <input placeholder="Image File" name="url" type="file" onChange={()=>props.uploadImage()}  />
    )
}


