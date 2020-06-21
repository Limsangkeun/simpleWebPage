import React from 'react';

class Gallery extends React.Component {

    renderImage (startAt) {
        let images = [];
        for (let i =startAt; i<=startAt+1; i++) {
            images.push(<div className="card">
                <img className="card-image-top" src={process.env.PUBLIC_URL +"/img/1-"+i+".jpg"} alt="no"></img>
            </div>);
        }
        return images;
    }

    render () {
        return(
            <section className="container">
                <div className="row row-cols-3">
                    <div className="col">
                        {this.renderImage(1)}
                    </div>
                    <div className="col">
                        {this.renderImage(3)}
                    </div>
                    <div className="col">
                        {this.renderImage(5)}
                    </div>
                </div>
            </section>
        );
    }

}

export default Gallery;