import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';


export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', ' Dragon Ball']
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     //setCategories(['HunterXHunter', ...categories]);
    //     setCategories(elem => ['Ranma', ...categories]);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid category={category} key={category} />
                        //<li key={category}> {category}</li>
                    )
                    )
                }
            </ol>
        </>
    )
}

