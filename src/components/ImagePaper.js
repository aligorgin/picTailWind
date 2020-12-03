import React from 'react';

const ImagePaper = ({image})=>{
    const tags = image.tags.split(',')

   return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg box-border'>
            <img
                className='w-full'
                src={image.webformatURL}
                alt=""
            />
            <div className="px-6 py-4">
                <div className="font-bold text-blue-500 text-xl mb-2">
                    photo by {image.user}
                </div>
                <ul>
                    <li className='pb-1'>
                        <strong >Views: </strong>
                        {image.views}
                    </li>
                    <li className='pb-1'>
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag,index)=>(
                    <span
                        key={index}
                        className='hover:bg-gray-100 inline-block rounded-full px-3 py-1 text-sm font-semibold tracking-wide text-black bg-gray-300 mr-2'>
                        {tag}
                    </span>))}
            </div>
        </div>
    );
}

export default ImagePaper