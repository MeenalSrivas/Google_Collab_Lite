import  { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './MenuBar'
import './styles.css' 
const Tiptap = () => {
  const [_, setUpdatedAt] = useState(0)
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World! </p>',
    onUpdate: () => {
      // By setting state here, we force React to re-render the component,
      // which in turn updates the MenuBar.
      setUpdatedAt(Date.now())
    },

    
  })

  return (
    <div>
    <MenuBar editor={editor} />
    <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap