import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const DynamicRoute: NextPage<{ single: { id: string } }> = ({ single }, props) => {

    if (!single) {
        return <div>loading?</div>
    }
    
    return (
        <div>
            {single.id}
        </div>
    );
}


async function getData() {
    return [{ id: 'p1' }, { id: 'p2' }, { id: 'p3' }]
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const myId = params?.myId;
    const data = [{ id: 'p1', title: 'lala' }, { id: 'p2', title: 'lala' }, { id: 'p3', title: 'lala' }]

    const single = data.find(d => d.id === myId);

    if (!single) {
        return { notFound: true }
    }

    return {
        props: { single }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await getData();
    const ids = data.map(a => a.id);
    //map ids
    const params = ids.map(id => ({ params: { myId: id } }));

    return {
        paths: params,
        fallback: true
    }
}

export default DynamicRoute;