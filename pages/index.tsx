import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link';
import LoginForm from '../components/Auth/LoginForm';

const Home: NextPage<{ data: Array<string> }> = ({ data }) => {

  return (
    <div>
      <ul>
        <li><Link href={"/loginpage"}>Login</Link></li>
      </ul>
      {data.map(d => <div key={d}>{d}</div>)}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {

  return {
    props: {
      data: ['sd', '121sd']
    }
  }
}

export default Home
