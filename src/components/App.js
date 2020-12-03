import React, {useState, useEffect} from 'react';
import ImagePaper from "./ImagePaper";
import pixabay from "../apis/pixabay";
import ImageSearch from "./ImageSearch";

const App = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('flower');

    useEffect(() => {
        const search = async () => {
            const res = await pixabay.get('', {
                params: {
                    q: term,
                    image_type: "photo"
                }
            });
            setImages(res.data.hits);
            setIsLoading(false);
        }
        search()
    }, [term])


    const rerenderedImages = images.map((image) => {
        return (
            <ImagePaper key={image.id} image={image}/>
        )
    })

    return (
        <div className='container mx-auto'>
            <ImageSearch searchText={(text) => setTerm(text)}/>

            {!isLoading && images.length === 0 && <h1 className='text-7xl text-center mx-auto mt-32'>No Images Found</h1>}

            {isLoading ? <h1 className='text-7xl text-center mx-auto mt-32'>Loading.. </h1> :
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {rerenderedImages}
                </div>}
        </div>
    )
}

export default App;