const Header = () => {
    const headerStyle = {
        border: '2px solid gray',
        borderRadius: '2px',
        margin: '10px 10%',
        padding: '5px'
    }

    const pagesStyle = {
        display: 'inline-block',
        margin: '5px 20px',

    }

    const authStyle = {
        display: 'inline-block',
        margin: '5px 20px',
        border: '3px solid blue',
        borderRadius: '8px',
        padding: '5px 15px'
    }


    const pages = ['Blogs', 'About us', 'Contact us'];;
    const auth = ['Sign up', 'Sign in', 'Logout'];

    const pagesList = pages.map((page, id) => <li key={id} style={pagesStyle}><a href='#'>{page}</a></li>);
    const authList = auth.map((page, id) => <li key={id} style={authStyle}>{page}</li>)

    return (

        <header>
            <nav style={headerStyle}>
                <ul style={pagesStyle}>
                    {pagesList}
                </ul>
                <ul style={pagesStyle}>
                    {authList}
                </ul>
            </nav>
        </header>

    )

}

export default Header;