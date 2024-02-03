import React from 'react'
import { Link } from 'react-router-dom';

function CategoryList({ categories }) {
  return (
    <div className='my-3'>
      <h2 className='text-uppercase text-decoration-underline text-warning fw-bolder  '>categories</h2>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center align-items-center'>
        {
          categories.map(category => {
            const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail } = category;
            return (
              <Link to={`meal/category/${title}`} className=' text-decoration-none text-dark my-3 col' key={id}>
                <div className="card text-bg-light border-1.5 border-warning">
                  <img src={thumbnail} className="card-img" alt="CategoryImage"/>
                    <div className="card-img-overlay">
                      <span className="badge text-bg-warning text-uppercase">{title}</span>
                    </div>
                </div>
              </Link>
            )
          })
        }

      </div>
    </div>
  )
}

export default CategoryList

