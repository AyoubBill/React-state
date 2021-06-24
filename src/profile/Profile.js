import React from 'react';
import image from "../image.jpg"
import "../App.css"

class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Person: {
                fullName: {
                    firstName: "Ayoub",
                    lastName: "BIL"
                },
                imgSrc: image,
                profession: "Pilote dans la nomenclature d'etude"
            },
        }
    }

    render() {
        return <div className="profile-content">
            <div>
                <img src={image} alt={this.state.Person.fullName.firstName} />
            </div>

            <div className="fullName">
                <p>{this.state.Person.fullName.firstName} {this.state.Person.fullName.lastName}</p>
                <p>{this.state.Person.profession}</p>
            </div>
        </div>
    }
}

export default Profile 