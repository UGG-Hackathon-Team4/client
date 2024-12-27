import { useNavigate } from "react-router-dom"


const MainPage = ()=>{
    const navigate = useNavigate();

    //작품찾기 페이지 이동 함수
    const navigateSearch = ()=>{
        navigate('/');
    }
    //전시회 보기 페이지 이동 함수
    const navigateExhibition = ()=>{
        navigate('/');
    }
 
    return(
        <>
        <div>
            <button onClick={navigateSearch}> 작품 찾기</button>
            <button onClick={navigateExhibition}> 전시회 보기</button>
        </div>
        </>
    )
}
export default MainPage