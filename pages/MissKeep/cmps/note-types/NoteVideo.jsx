export function NoteVideo(props) {

    function getId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
    
        return (match && match[2].length === 11)
          ? match[2]
          : null;
    }
        
    const videoId = getId(props.note.info.url);
    console.log(videoId);
    const iframeMarkup = '<iframe width="560" height="315" src="//www.youtube.com/embed/' 
        + videoId + '" frameborder="0" allowfullscreen></iframe>';

    console.log(props.note);
    return (
        <ul>
            <li className="note-header">{props.note.info.title}</li>
            <li>
                <div className="note-video-container">
                    <iframe width="200px" src={'//www.youtube.com/embed/'+videoId}>
                    </iframe>
                </div>
            </li>
        </ul>
    )
}