import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router의 useNavigate 훅을 사용

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const fileInputRef = useRef(null);
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동

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

    const handleUpload = () => {
        // 파일이 선택되었든 아니든 무조건 CardSlider로 이동
        navigate('/CardSlider'); // '/CardSlider' 경로로 이동
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
                    border: 'none', // 테두리 제거
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
                        backgroundColor: '#ffffff',
                        padding: '60px',
                        borderRadius: '10px',
                        marginTop: '15px',
                        border: '2px solid #ddd'
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
                            border: 'none', // 테두리 제거
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

            {/* 업로드 상태 표시 (현재는 업로드 상태 표시가 필요 없으므로 생략) */}
        </div>
    );
}

export default FileUpload;
