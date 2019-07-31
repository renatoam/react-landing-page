import React from 'react';
import bn from '../../images/illustration-intro.png';
import './../../scss/main.css';

const Banner = () => {
    return (
        <figure className="banner">
            <img className="banner__image" src={bn} alt=""/>
        </figure>
    )
}

const Text = ()=>{
    return (
        <section className="presentation">
            <h2 className="presentation__title">All your files in one secure location, <br/>acessible anywhere.</h2>
            <p className="presentation__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, itaque. Beatae enim eveniet quam. Tempora quidem, vitae maxime iure quae officia voluptate vel perferendis atque minus ullam tenetur qui nulla.</p>
        </section>
    )
}

const Button = () => {
    return (
        <button className="start">Get Started</button>
    )
}

export default function intro() {
  return (
    <section className="intro">
        <Banner />
        <Text />
        <Button />
    </section>
  );
}
