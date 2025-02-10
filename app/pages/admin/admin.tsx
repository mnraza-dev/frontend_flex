import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';  
// Import dynamic to load Quill only on the client-side

// Dynamically import Quill to avoid SSR issues
const Quill = dynamic(() => import('quill'), { ssr: false });
import 'quill/dist/quill.snow.css'; // Import the default theme

const Admin = () => {
  const [editorContent, setEditorContent] = useState<string>('');
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      // Initialize Quill editor when the component is mounted
      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: '1' }, { header: '2' }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link'],
            [{ align: [] }],
            ['blockquote'],
            ['clean'],
          ],
        },
      });

      quill.on('text-change', () => {
        setEditorContent(quill.root.innerHTML); // Save the HTML content
      });
    }
  }, []);

  const handleSave = () => {
    // Here you could save the content (e.g., send it to a backend or a database)
    console.log('Saved Content:', editorContent);
  };

  return (
    <div className="admin-container">
      <h1>Write Your Blog Post</h1>
      <div
        ref={editorRef}
        style={{
          height: '300px',
          border: '1px solid #ccc',
          marginBottom: '10px',
        }}
      ></div>
      <button onClick={handleSave} style={{ marginTop: '10px' }}>
        Save Post
      </button>
    </div>
  );
};

export default Admin;
