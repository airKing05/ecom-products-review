import React from 'react'

export default function ReviewData({ items, deleteReviewFunc}) {
   
  return (
      <div className='shadow py-2 px-4 mb-4 bg-body rounded'>
          <div class="my-3  d-flex justify-content-between ">
              <span className='fs-4'>{items.userId}</span>
              <span>
                  <button className='btn btn-primary' onClick={() => deleteReviewFunc(items.id)}>Delete</button>
              </span>
             
          </div>
          <div class="mb-3">
              <p className='text-start'>{items.review}.</p>
          </div>
    </div>
  )
}
