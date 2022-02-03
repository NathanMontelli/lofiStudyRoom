import { useCallback, useEffect, useState } from 'react'
import './Text.css'
import Quill from "quill"
import "quill/dist/quill.snow.css"
import { io } from 'socket.io-client'
import { useParams } from 'react-router-dom'
import { Col, Container } from 'react-bootstrap'


const SAVE_INTERVAL_MS = 2000

const TOOLBAR_OPTIONS = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['image', 'blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean'],                                         // remove formatting button
]

function TextEditor() {
  // renaming id (from URL) to documentId
  const { id: documentId } = useParams()
  const [socket, setSocket] = useState()
  const [quill, setQuill] = useState()

  // setting up socket and disconnect when no longer needed
  useEffect(() => {
    // const s = io("https://lofistudy.herokuapp.com/")
    const s = io("http://localhost:8080")
    setSocket(s)

    return () => {
      s.disconnect()
    }
  }, [])

  // handles loading of document
  useEffect(() => {
    if (socket == null || quill == null) return
    // listen for changes and runs once
    socket.once('load-document', document => {
      // sets saved changes in document
      quill.setContents(document)
      // enables quill once document is loaded
      quill.enable()
    })
    // gets document from server with the unique 'documentId'
    socket.emit('get-document', documentId)
  }, [socket, quill, documentId]);

  // setting interval to save document every so often
  useEffect(() => {
    if (socket == null || quill == null) return

    const interval = setInterval(() => {
      socket.emit('save-document', quill.getContents())
    }, SAVE_INTERVAL_MS)

    return () => {
      clearInterval(interval)
    }
  }, [socket, quill]);

  // handles collaborative editing on text-change
  useEffect(() => {
    // checks to make sure socket or quill is not undefined
    if (socket == null || quill == null) return
    // when text changes, sends data to server
    const handler = (delta) => {
      // updates quill with new changes
      quill.updateContents(delta)
    }
    socket.on('receive-changes', handler)

    return () => {
      socket.off('receive-changes', handler)
    }
  }, [socket, quill]);

  // handles collaborative editing on text-change
  useEffect(() => {
    // checks to make sure socket or quill is not undefined
    if (socket == null || quill == null) return
    // when text changes, sends data to server
    const handler = (delta, oldDelta, source) => {
      if (source !== 'user') return
      socket.emit('send-changes', delta)
    }
    quill.on('text-change', handler)

    return () => {
      quill.off('text-change', handler)
    }
  }, [socket, quill]);


  const wrapperRef = useCallback(wrapper => {
    if (wrapper == null) return

    wrapper.innerHTML = ''
    const editor = document.createElement('div')
    wrapper.append(editor)
    const q = new Quill(editor, {
      theme: 'snow',
      modules: { toolbar: TOOLBAR_OPTIONS },
    })
    // q.disable()
    q.setText('Begin Writing here')

    setQuill(q)
  }, [])

  return (
    <>
    <div className='container' ref={wrapperRef}></div>
      <Container lassName="reminder">
      <Col className="reminder">
          <h4 className="reminder">Dont Forget!</h4>
          <h6 className="reminder">Copy your note ID (ex: "/documents/...") from the URL</h6>
          
        </Col>
      </Container>
    </>
  )
};

export default TextEditor;





