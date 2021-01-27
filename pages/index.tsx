import Link from 'next/link'
import Layout from '../components/Layout';

const students = [
  'Aryel',
  'David',
  'Chirs',
  'Colton',
  'Hannah',
  'Taha',
]

const StudentRender = () : any => {
  let array =[];
  for( let i = 0; i < students.length; i++){
    array.push(<h3>{students[i]}</h3>)
  }
  return array;
}

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello, Interactive media design - Web Students👋</h1>

    <StudentRender />
    <h4>Sorry, I cannot know all of your names</h4>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
