import { useRef } from 'react'

const FileUploader = ({ onFileSelect }) => {
    const fileInput = useRef(null);

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        if (file) {
            onFileSelect(file); // Call the callback function with the selected file
        }
    };

    return (
        <div className="file-uploader">
            <input type="file" ref={fileInput} onChange={handleFileInput}></input>
            <button onClick={e => fileInput.current && fileInput.current.click()}>Upload</button>
        </div>
    )
}


export { FileUploader };