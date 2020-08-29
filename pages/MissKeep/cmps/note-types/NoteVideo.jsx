export function NoteVideo(props) {

    
    function getId(url) {
        if(!url)return 
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
    
        return (match && match[2].length === 11)
          ? match[2]
          : null;
    }
        
    const videoId = getId(props.note.info.url);
   
    return (
        <ul>
            <li className="note-header">{props.note.info.title}</li>
            <li>
                <div className="note-video-container">
                    <iframe height="250px" src={'https://www.youtube.com/embed/'+videoId} frameBorder="0" allowFullScreen>
                    </iframe>
                </div>
            </li>
        </ul>
    )
}