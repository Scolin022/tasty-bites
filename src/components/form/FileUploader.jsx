import { useRef } from 'react'

const FileUploader = ({ onFileSelect }) => {
    const fileInput = useRef(null);

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        if (file) {
            onFileSelect(file);
        }
    };

    return (
        <div className="file-uploader">
            <input type="file" ref={fileInput} onChange={handleFileInput}></input>
            <button onClick={e => fileInput.current && fileInput.current.click()} style={{ display: 'none' }}>Upload</button>
        </div>
    )
}


export { FileUploader };