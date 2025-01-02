import "./Home.css"

function Home(){
    return(
        <div className="home-container">
            <p>{photo()}</p>
            <p>{Objective()}    </p>
        </div>
    );
}

function photo(){
    return(
        <img className="home-img" src={require("./akuma_image.jpg")} alt="image of person"/>
    )
}

function Objective(){
    return(
        <p>
            Experienced software developer with a passion for tackling challenges head-on and delivering innovative solutions. With 7 years of industry experience, I thrive in environments where professional challenges excite me and drive my commitment to continuous learning and self-improvement. My proactive approach ensures fast delivery of high-quality solutions, and my ability to independently figure out solutions allows me to excel in dynamic work environments. Seeking opportunities where I can leverage my expertise to contribute to cutting-edge projects while staying updated with the latest technologies and methodologies in software development.
        </p>
    )
}

export default Home;