export function ImageInput(props){

    console.log(props);
    return (
        <input placeholder="Image File" name="url" type="file" onChange={()=>props.uploadImage()}  />
    )
}


