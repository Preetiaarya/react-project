import './Style.css'
function Nav() {
    return (<div className='Nav'>
        {/* <img className='logo' src="images.png" alt="logo" />
        <div className='div-a'>
            <a href="">Contact</a>
        </div> */}
        <div className='div-a'>
            <a href="">About</a>
            <ul>
                <li>
                    <a href="https://www.canva.com/design/DAGQd97ZRGs/w13qVpzCTUND4HTT7HXNlQ/edit?utm_content=DAGQd97ZRGs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"></a>
                </li>
            </ul>
            <a href="">Project</a>

            <ul>
                <li>
                    <a href="https://preetiaarya.github.io/weather-application/" target='_blank'></a>
                </li>

            </ul>
            <a href="">Contact</a>

        </div>

    </div>)

}


export default Nav;