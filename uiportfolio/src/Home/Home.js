import "./Home.css"

function Home(){
    let timeline="Mar 2022";
    let title = "Technical Architect";
    let company = "Devon";
    let expPointsArray = ["achieved this", "implemented this ", "delivered all this"];
    return(
        <div className="home-container">
            <div>{NameAddress()}</div>
            <div>{photo()}</div>
            <div>{Objective()}</div>
            <h2>Experience</h2>
            <div>{ExperienceCard(timeline, title, company, expPointsArray)}</div>
            <div>{ExperienceCard(timeline, title, company, expPointsArray)}</div>
            <h2>Certifications</h2>
            <div>{CertificationCard("AZ-900")}</div>
            <div>{CertificationCard("PSM-1")}</div>
        </div>
    );
}

function CertificationCard(certificationName){
    return(
        listItem(certificationName, certificationName)
    )
}

function ExperienceCard(timeline, title, company, expPointsArray){
    return(
        <div className="experience-container">
            <h4>{timeline}</h4>
            <span>
                <h3>{title}, {company}</h3>                
            </span>
            <div>
                {expPointsArray.map((item, i) => {
                    //console.log(item);
                    return(listItem(i, item))
                })}
            </div>             
        </div>
    )
}

function listItem(key, point){
    const style = {margin:20};
    return(
        <li style={style} key={key}>{point}</li>
    )
}

function NameAddress(){
    return (
        <div className="name-address">
            <h1> ABHISHEK KUMAR </h1>
            <h4>Phone 7975142432</h4>
            <div className="linkedin">
                <pre><h4>abhishekkmr031@gmail.com <a href="https://www.linkedin.com/in/abhishek-kumar-193369a4/">Linkedin</a></h4> </pre>
            </div>
        </div>
    )
}

function photo(){
    return(
        <img className="home-img" src={require("./bluebg.jpeg")} alt="person"/>
    )
}

function Objective(){
    return(
        <div>
            <h2>Objective</h2>
            Experienced software developer with a passion for tackling challenges head-on and delivering innovative solutions. With 7 years of industry experience, I thrive in environments where professional challenges excite me and drive my commitment to continuous learning and self-improvement. My proactive approach ensures fast delivery of high-quality solutions, and my ability to independently figure out solutions allows me to excel in dynamic work environments. Seeking opportunities where I can leverage my expertise to contribute to cutting-edge projects while staying updated with the latest technologies and methodologies in software development.
        </div>
    )
}

export default Home;