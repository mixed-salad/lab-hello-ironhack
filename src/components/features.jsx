import React from 'react';


class Feature extends React.Component {
    render() {
        return (          
          <section className="features">
            <div class="single-feature">
                <img src="./images/icon1.png" className="icon-image" alt="icon-declarative" />
                <h3>Declarative</h3>
                <p class="description">React makes it painless to create interactive UIs.</p>
            </div>
            <div class="single-feature">
                <img src="./images/icon2.png" className="icon-image" alt="icon-components" />
                <h3>Components</h3>
                <p class="description">Build encapsulated components that manage their state.</p>
            </div>
            <div class="single-feature">
                <img src="./images/icon3.png" className="icon-image" alt="icon-single-way" />
                <h3>Single-Way</h3>
                <p class="description">A set of immutable values are passed to the component's</p>
            </div>
            <div class="single-feature">
                <img src="./images/icon4.png" className="icon-image" alt="icon-jsx" />
                <h3>JSX</h3>
                <p class="description">Statically-typed, designed to run on modern browsers.</p>
            </div>
          </section>
        );
    }
}

export default Feature;