export function TodosInput(props) {

    
    return (
        <input placeholder="Todos Name" name="label" type="text" onChange={props.onChangeInput} />
    )
}