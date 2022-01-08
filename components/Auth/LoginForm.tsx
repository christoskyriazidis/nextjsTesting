import { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import PrimaryInput from "../UI/Input/PrimaryInput";

interface ILoginInputs {
    username: string
    password: string
}

const schema = yup.object({
    username: yup.string().min(5, 'omg min leng/').max(25).required(),
    password: yup.string().required('omg ')
}).required();

const LoginForm: NextPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ILoginInputs>({ resolver: yupResolver(schema) })

    const onSubmit: SubmitHandler<ILoginInputs> = async (data, event) => {
        console.log(data);
        const response = await fetch('/api/user/register', { method: 'POST', body: JSON.stringify(data) })
        const result = await response.json()
    }

    const handleDelete = () => {
        fetch(`/api/user/1232s`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <PrimaryInput {...register('username')} errors={errors.username} placeholder="username" />
                </div>
                <div>
                    <PrimaryInput {...register('password')} errors={errors.password} placeholder="password" />
                </div>
                <div>
                    <input type="submit" value={'login?'} />
                </div>
            </form>
            <div><button onClick={handleDelete}>Delete?</button></div>
        </div>
    )
}

export default LoginForm