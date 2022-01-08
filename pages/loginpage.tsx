import { NextPage } from "next";
import LoginForm from "../components/Auth/LoginForm";
import CommonModal from "../components/UI/common/Modal";


const LoginPage: NextPage = () => {

    return (
        <CommonModal closeModal={() => { }}>
            <LoginForm />
        </CommonModal>
    )
}

export default LoginPage