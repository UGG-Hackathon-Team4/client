import React, { useRef, useState } from 'react';

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setUploadStatus('');
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                setUploadStatus('업로드 중...');
                const response = await fetch('https://example.com/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error('업로드 실패');
                }

                const result = await response.json();
                setUploadStatus('업로드 성공!');
                console.log('업로드 성공:', result);
            } catch (error) {
                setUploadStatus('업로드 실패.');
                console.error('업로드 오류:', error);
            }
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            {/* 텍스트 추가 */}
            <div style={{ display:'flex',justifyContent:'center',flexDirection:'column', marginTop:'80px' }}>
                <p style={{ fontWeight: 'bold', fontSize: '24px', color: 'black' }}>작품 사진을 업로드 해보세요!</p>
                <p style={{ fontWeight: 'normal', fontSize: '13px', color: 'gray' }}>함께 관람한 사람들의 감상팁을 확인할 수 있어요.</p>
            </div>
            {/* 텍스트 버튼 */}
            <button
                onClick={handleButtonClick}
                style={{
                    marginTop: '100px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    backgroundColor: '#F3C3B7',
                    border: 'none',
                    color: 'black',
                    fontSize: '16px',
                    cursor: 'pointer',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '30px',
                    paddingRight: '30px',
                    borderRadius: '10px'
                }}
            >
                사진찍기
            </button>


            {/* 이미지 선택 버튼 */}
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
                <img
                    src={selectedFile ? URL.createObjectURL(selectedFile) : 'ic_plus.png'}
                    alt="사진 선택"
                    onClick={handleButtonClick}
                    style={{
                        width: '250px',
                        height: 'auto',
                        cursor: 'pointer',
                        backgroundColor: '#D9D9D9',
                        padding: '60px',
                        borderRadius: '10px',
                        marginTop: '15px'
                    }}
                />
            </div>

            {/* 업로드 버튼은 이미지 아래에 위치 */}
            {selectedFile && (
                <div style={{ marginTop: '20px' }}>
                    <button
                        onClick={handleUpload}
                        style={{
                            padding: '10px 20px',
                            cursor: 'pointer',
                            backgroundColor: '#F3C3B7',
                            color: 'black',
                            borderRadius: '10px'
                        }}
                    >
                        업로드
                    </button>
                </div>
            )}

            {/* 숨겨진 파일 입력 */}
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
            />

            {/* 업로드 상태 표시 */}
            {uploadStatus && (
                <p style={{ marginTop: '20px', fontWeight: 'bold', color: uploadStatus.includes('failed') ? 'red' : 'green' }}>
                    {uploadStatus}
                </p>
            )}
        </div>
    );
}

export default FileUpload;
