import { Component } from 'react';
import getData  from '../services/get-data'

import Blog from './Blog';

class BlogList extends Component {

    constructor(props) {
        super(props)

        console.log('BlogList component is constructed!'); // For Debugging!
    }

    componentDidMount() {
        // fetch('https://blog-apps-c12bf.firebaseio.com/posts.json')
        // .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(err => console.log(err))

        getData();
    }


    render() {
        console.log('BlogList component is rendering!'); // For Debugging!

        const listStyle = {
            'list-style-type': 'none',
        }

        return (
            <section>
                <nav>
                    <ul style={listStyle}>
                        <li><a href="#" >London</a></li>
                        <li><a href="#" >Paris</a></li>
                        <li><a href="#" >Tokyo</a></li>
                    </ul>
                </nav>

                <article >
                    <h3>The list of the blogs:</h3>

                    {this.props.blogs.map((x, id) => {
                        return <Blog
                            key={id}
                            title={x.title}
                            description={x.description}
                            img={x.imgSource}
                        />
                    })}

                </article>
            </section>
        )
    }

}

export default BlogList;
