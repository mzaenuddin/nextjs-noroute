import { useRouter } from "next/router"
import Layout from "../../../components/Layout";

interface User{
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface userDetailProps{
   User: User;
}

export default function UserDetail(props: userDetailProps) {
    const router = useRouter();
    const {id} = router.query;
    const { User } = props;
  return (
    <Layout pageTitle="User Detail">
{/*        <p>{User.name}</p>
       <p>{User.email}</p>
       <p>{User.phone}</p>
       <p>{User.website}</p> */}
    </Layout>
  )
}

export async function getStaticPaths(){
  const res = await fetch('https://jsonplaceholder.typicode.com/Users');
  const dataUser = await res.json()

  const paths = dataUser.map((User: User) => ({
    params: {
      id: `${User.id}`,
    },
  }));
  return{
    paths,
    fallback: true,
  };
}

// get static props untuk mendapatkan ID String
interface GetStaticProps{
  params:{
    id: string;
  }
}

export async function getStaticProps(context: GetStaticProps)
{
  const {id} = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const User = await res.json()

  return{
    props:{
      User,
    }
  }
}
