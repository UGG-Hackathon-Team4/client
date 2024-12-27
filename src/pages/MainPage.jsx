import { useNavigate } from "react-router-dom"


const MainPage = ()=>{
    const navigate = useNavigate();
    const navigateSearch = ()=>{
        navigate('/login');
    }
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