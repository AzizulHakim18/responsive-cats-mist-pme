import React from 'react';

const HomeAbout = () => {
    return (
        <div className=' grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 justify-between items-center my-8 py-4'>
            <div>
                <p className='text-justify '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem doloremque neque eaque quae corrupti porro excepturi qui ipsa animi quas. Adipisci ad illum eos commodi, incidunt temporibus similique saepe praesentium labore, obcaecati amet debitis ullam ipsam quo dolore enim. Laudantium, modi omnis? Dolorum, quo totam fugit molestiae et numquam delectus vero enim. Itaque mollitia officia pariatur a reprehenderit, aliquam fuga ex voluptatum placeat inventore quod magnam? Quo dolorem quisquam illum enim? Nam obcaecati neque dolorem earum vitae doloremque nobis ex ut natus? Impedit ratione voluptates odit voluptatem odio eos quasi earum, dolore quod! Debitis veritatis dolores molestias, aperiam iusto culpa reprehenderit eligendi a deleniti quam repellat in expedita consequuntur eaque at perferendis provident facere laborum. </p>
                <button className="btn btn-outline btn-info">Read More</button>
            </div>

            <img className='border rounded-lg md:m-8' src="https://img.freepik.com/free-photo/female-scientist-holding-test-tube_23-2148799292.jpg?size=626&ext=jpg" alt="" />
        </div>
    );
};

export default HomeAbout;