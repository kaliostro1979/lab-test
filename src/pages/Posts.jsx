import {useGetAllPostsQuery} from "../app/slices/fetchPosts";
import {useState} from "react";
import Pagination from "../components/Pagination";

const Posts = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(10)
    const {data} = useGetAllPostsQuery({page: currentPage, limit: perPage})

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

    const handlePerPageChange = (e)=>{
        setPerPage(e.target.value)
    }

    return (
        <div>
            <label htmlFor="PerPage" className={"PerPageLabel"}>Select Per Page limit</label>
            <select id={"PerPage"} className={"PerPage"} onChange={handlePerPageChange}>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
            </select>
            <div className={"PostsList"}>
                {
                    data && data.apiResponse.map((item, index)=>{
                        return <div className={"PostItem"} key={item.id}>
                            <div className={"PostItemMeta"}>
                                <span>{index + 1}</span> - <strong>{item.id}</strong>
                            </div>
                            <div>
                                <p>{item.title}</p>
                                <p>{item.body}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <Pagination
                totalCount={totalCount}
                perPage={perPage}
                callBack={handleCurrentPage}
                currentPage={currentPage}
                switchPrev={handlePrevPage}
                switchNext={handleNextPage}
            />
        </div>
    );
};

export default Posts;
