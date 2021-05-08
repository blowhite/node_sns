import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const profile = () => {


    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>회원정보</title>
            </Head>
            <AppLayout>회원정보</AppLayout>
        </>
    );

}

export default profile;