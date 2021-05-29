import React, { useCallback, useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input } from 'antd';
const Signup = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const onSubmit = useCallback(() => {
        setId(e.target.value);
        setNickname(e.target.value);
        setPassword(e.target.value);
    }, []);
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setId(e.target.value);
    }, []);
    const onChangeNickname = useCallback((e) => {
        setId(e.target.value);
    }, []);
    const onChangePasswordCheck = useCallback((e) => {
        setId(e.target.value);
    }, []);  
    return (
        <AppLayout>
            <Head>
                <meta charSet="utf-8" />
                <title>회원가입</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input name="user-id" value={id} required onChange={onChangeId} />

                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input name="user-id" value={nickname} required onChange={onChangeNickname} />

                </div>
                <div>
                    <label htmlFor="user-password">닉네임</label>
                    <br />
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />

                </div>
                <div>
                    <label htmlFor="user-password=check">비밀번호체크</label>
                    <br />
                    <Input
                        name="user-password-check"
                        type="password"
                        value={passwordCheck}
                        required
                        onChange={onChangePasswordCheck}
                    />
                </div>
            </Form>            
        </AppLayout>)
}

export default Signup;