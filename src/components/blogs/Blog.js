import styles from './Blog.module.css';

const Blog = (props) => {

    return (
        <div className={styles.blog}>
            <article >
                <h3>{props.title}</h3>
                <p >{props.description}
                    <img className={styles.image} src={props.img} alt="Image is loading ..." />
                </p>
            </article>
        </div>
    )

}

export default Blog;


// OLD Styles:

// const blogStyle = {
//     color: 'blue',
//     maxWidth: '60%',
//     margin: '20px auto',
//     border: '2px solid green',
//     borderRadius: '8px',
//     padding: '10px',
// }

// const imgStyle = {
//     maxWidth: '60%',
//     height: 'auto',
// }