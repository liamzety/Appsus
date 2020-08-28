export function VideoInput(props){

    
    return (
        <input placeholder="Video URL" name="url" type="text" onChange={()=>props.onChangeInput()} />
    )
}