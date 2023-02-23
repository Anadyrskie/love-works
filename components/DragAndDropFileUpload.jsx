import { useState, useRef } from 'react';

const DragAndDropFileUpload = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        setFile(droppedFile);
    };

    const handleFileSelect = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = async (e) => {
        setSubmitStatus('loading');
        e.preventDefault();
        if (file) {
            const formData = new FormData();
            const fileData = new Blob([file], { type: file.type });
            formData.append('vendors', fileData, 'vendors.tsv');
            try {
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });
                if (response.ok) {
                    setSubmitStatus('success');
                    console.log('File uploaded successfully');
                } else {
                    setSubmitStatus('error');
                    console.error('Error uploading file');
                }
            } catch (error) {
                setSubmitStatus('error');
                console.error(error);
            }
        }
    };

    let buttonClasses = 'bg-blue-500 text-white py-2 px-4 rounded';
    let buttonText = 'Submit';

    if (submitStatus === 'loading') {
        buttonClasses += ' opacity-50 cursor-not-allowed';
        buttonText = (
            <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
            </svg>
        );
    } else if (submitStatus === 'success') {
        buttonClasses += ' bg-green-500';
        buttonText = (
            <svg
                className="w-6 h-6 text-white mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                />
            </svg>
        );
    } else if (submitStatus === 'error') {
        buttonClasses += ' bg-red-500';
        buttonText = 'Error uploading file';
    }

    return (
        <div>
            <div
                className={`border-dashed border-2 border-gray-400 rounded-md p-4 ${
                    isDragging ? 'bg-gray-100' : ''
                }`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
            >
                {file ? (
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                            <svg
                                className="w-6 h-6 text-green-500 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>{file.name}</span>
                        </div>
                    </div>
                ) : (
                    <>
                        <svg
                            className="w-12 h-12 text-gray-400 mx-auto mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                Drag and drop your file here
                            </p>
                            <p className="text-xs text-gray-500">
                                or click to select a file from your computer
                            </p>
                        </div>
                    </>
                )}

                <input
                    type="file"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                />

            </div>
            <button
                className={buttonClasses + `m-auto`}
                onClick={handleSubmit}
                disabled={submitStatus === 'loading' || submitStatus === 'success'}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default DragAndDropFileUpload;

