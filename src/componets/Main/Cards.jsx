import React from 'react'




function Cards(props) {
  return (

<>


    <section className='section'>

    <div className="content">
        
            <img src={props.img} />
            <h3>{props.title}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, ullam.</p>
            <h6>{props.price}</h6>
            <ul>
                <li>
                <i className="fa fa-star checked"></i>
                <i className="fa fa-star checked"></i>
                <i className="fa fa-star checked"></i>
                <i className="fa fa-star checked"></i>
                <i className="fa fa-star"></i>
                </li>
            </ul>
            <button className="buy-1">buy now</button>
        </div>

        </section>
        </>
  )
}

export default Cards