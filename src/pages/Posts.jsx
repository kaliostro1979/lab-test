import {useGetAllPostsQuery} from "../app/slices/fetchPosts";
import {useState} from "react";
import Pagination from "../components/Pagination";

const Posts = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data} = useGetAllPostsQuery({page: currentPage, limit: 15})

    const totalCount = data && data.totalCount

    const handleCurrentPage = (e)=>{
        setCurrentPage(+e.target.innerText)
    }

    const handlePrevPage = ()=>{
        setCurrentPage(prev=>prev - 1 )
    }

    const handleNextPage = ()=>{
        setCurrentPage(prev=>prev + 1 )
    }

    return (
        <div>
            <div className={"PostsList"}>
                {
                    data && data.apiResponse.map((item, index)=>{
                        return <p key={item.id}><span>{index + 1}</span> - <strong>{item.id}</strong> - {item.title}</p>
                    })
                }
            </div>
            <Pagination
                totalCount={totalCount}
                perPage={15}
                callBack={handleCurrentPage}
                currentPage={currentPage}
                switchPrev={handlePrevPage}
                switchNext={handleNextPage}
            />
        </div>
    );
};

export default Posts;
