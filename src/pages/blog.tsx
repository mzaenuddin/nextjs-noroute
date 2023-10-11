import Link from 'next/link';
import Layout from "../../components/Layout";
import styles from '@/styles/Blog.module.css';



interface Post{
    id: number;
    title: string; 
    body: string;
}

interface BlogProps{
    dataBlog:  Post[]
}

export default function Blog(props: BlogProps) {
  const {dataBlog} = props;
  return (
    <Layout pageTitle='Blog Page'>
      {dataBlog.map(Blog => (
        <div key={Blog.id} className={styles.card}>
            <p>{Blog.title}</p>
            <p>{Blog.body}</p>
        </div>
    
       ))}
      
    </Layout>
  );
}


export async function getServerSideProps(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json()
  return{
    props:{
      dataBlog,
    },
  };
}
