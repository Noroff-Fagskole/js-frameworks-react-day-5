import styles from './PageParagraph.module.css';

const PageParagraph = (props) => {
  return <p className={styles.PageParagraph}>{props.children}</p>;
};

export default PageParagraph;
