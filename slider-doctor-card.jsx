import { React } from 'react'

import '../../css/doctors.css'

export const Slider = props => {
    let {imgSrc, name, job} = props.data;
    return (
        <>
            <a className="CardDoctor" style={{backgroundImage: `url(${imgSrc})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionX: "50%",
                backgroundPositionY: "50%",
                }}>
            <div className="infoAboutDoctor">
                <h5>{name}</h5>
                <div className="palkaBetween"></div>
                <h4>{job}</h4>
            </div>
            </a>
        </>
    )
}
export default Slider