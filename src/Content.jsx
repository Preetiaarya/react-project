import './Style.css'
function Content(){
    return (<div className='Content'>
        <img className='personal-img' src="photo.jpg" alt="" />
        <div>
    <h1 className="heading">About Me</h1>
    <h3>Preeti : web Developer</h3>
    <p>My name is Preeti Kumari. I am from pathanpura, Bihar<br/>
    But currently I am living and doing coding course in Sajhe Sapne, <br/>in Kandbari Himachal Pradesh as a student.</p>
    <div className='list-div' >
        <div className='Project'><p>Project</p></div>
        <div className='Skill'><p>Skill</p></div>
        <div className='Contact'><p>Contact</p>t</div>
    </div>
    </div>
    
</div>
)

}
export default Content;