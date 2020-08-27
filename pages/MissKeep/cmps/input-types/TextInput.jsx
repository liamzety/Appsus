export function TextInput(props){

    console.log(props);
    return (
        <input placeholder="Text Note" name="txt" type="text" onChange={()=>props.onChangeInput()} value={props.text} />
    )
}