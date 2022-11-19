import {useGetAllPostsQuery} from "../app/slices/fetchPosts";
import {useState} from "react";
import Pagination from "../components/Pagination";

const Posts = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data} = useGetAllPostsQuery(currentPage)

    const totalCount = data && data.totalCount

    const handleCurrentPage = (e)=>{
        setCurrentPage(e.target.innerText)
    }

    const handlePrevPage = ()=>{
        setCurrentPage(prev=>prev - 1 )
    }

    const handleNextPage = ()=>{
        setCurrentPage(prev=>prev + 1 )
    }

    console.log(currentPage)

    return (
        <div>
            {
                data && data.apiResponse.map(item=>{
                    return <p key={item.id}>{item.title}</p>
                })
            }
            <Pagination
                totalCount={totalCount}
                perPage={10}
                callBack={handleCurrentPage}
                currentPage={currentPage}
                switchPrev={handlePrevPage}
                switchNext={handleNextPage}
            />
        </div>
    );
};

export default Posts;
