import { GetServerSideProps, NextPage } from "next";

const Ssr: NextPage = (props) => {

    if (!props) {
        return <div>loading?</div>
    }

    return (
        <div>
            lala
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    return {
        props: {
            username: 'kostas'
        }
    }
}

export default Ssr;