import React from 'react'

const Categories = () => {

    const data = [
        {
            cateImg: "./images/category/category01.jpg",
            cateName: "Mangas",
        },
        {
            cateImg: "./images/category/category02.jpg",
            cateName: "Bounty",
        },
        {
            cateImg: "./images/category/category03.png",
            cateName: "T-Shirts",
        },
        {
            cateImg: "./images/category/category04.png",
            cateName: "Jackets",
        },
        {
            cateImg: "./images/category/category05.png",
            cateName: "Trousers",
        },
        
    ]

  return (
    <>
      <div className='category'>
        {
            data.map((value, index) =>{
                return(
                    <div className='box f_flex' key={index}>
                        <img src={value.cateImg} alt="" />
                        <span>{value.cateName}</span>
                    </div>
                )
            })
        }
      </div>
    </>
  )
}

export default Categories;
