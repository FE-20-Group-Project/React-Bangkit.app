import React, {useRef} from 'react'
import JoditEditor from 'jodit-react'

function RichTextEditor({setContent}) {
    const editor = useRef(null);

  return <JoditEditor ref={editor}  onChange={content => setContent(content)} />;
}

export default RichTextEditor
