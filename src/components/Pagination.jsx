import React from 'react';

const Pagination = ({totalCount, perPage, callBack, currentPage, switchNext, switchPrev}) => {
    let pages = 0
    if (totalCount && perPage){
        pages = Math.ceil(totalCount / perPage)
    }

    const pagesCount = pages && Array.from(Array(pages).keys())

    return (
        <div className={'Pagination'}>
            <ul>
                <li> <button
                    onClick={switchPrev}
                    disabled={currentPage === 1}
                >Prev</button> </li>
                {
                    pagesCount && pagesCount.map((page, index)=>{
                        return <li
                            key={index * Math.random()}
                            onClick={callBack}
                            className={page + 1 === +currentPage ? 'Current' : ''}
                        >{page + 1}</li>
                    })
                }
                <li>
                    <button
                        onClick={switchNext}
                        disabled={currentPage === pagesCount.length}
                    >Next</button>

                </li>
            </ul>
        </div>
    );
};

export default Pagination;
