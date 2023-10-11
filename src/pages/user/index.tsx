import Layout from "../../../components/Layout";
import { useRouter } from 'next/router';
import styles from '../../styles/User.module.css';

interface userProps{
  dataUsers: Array<any>;
}

export default function Users(props: userProps) {
  const {dataUsers} = props;

  console.log(dataUsers);

  const router = useRouter();

  // console.log(dataUsers);
  // return (
  //   <Layout pageTitle='User Page'>
  //       {dataUsers.map((user)=> (
  //         <>
  //         <div key={user.id} onClick={() => router.push(`/user/${user.id}`)} className={styles.card}>
  //           <p>{user.name}</p>
  //           <p>{user.email}</p>
  //         </div>
  //     ))}
  //   </Layout>
  // );


  return (
    <Layout pageTitle='User Page'>
      {dataUsers.map(Users => (
        <div key={Users.id}  onClick={() => router.push(`/user/${Users.id}`)} className={styles.card}>
            <p>{Users.name}</p>
            <p>{Users.email}</p>
         
        </div>
    
       ))}
      
    </Layout>
  );
}







export async function getStaticProps() {
  const res      = await fetch('http://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();  
  return{
    props: {
      dataUsers: dataUsers,
    }
  }
}


// mempelajari getStaticProps
// mempelajari getStaticPath
// mempelajari getServerSideProps
