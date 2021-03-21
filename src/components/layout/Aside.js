import styles from './Aside.module.css'

const Aside = () => {

    return (
        <aside className={styles.aside}>
            <nav>
                <ul style={{width:'95%'}} >
                    <li className={styles.asideList}><a href="#" >Option 1</a></li>
                    <li className={styles.asideList}><a href="#" >Option 2</a></li>
                    <li className={styles.asideList}><a href="#" >Option 3</a></li>
                </ul>
            </nav>
        </aside>
    )

}

export default Aside;

