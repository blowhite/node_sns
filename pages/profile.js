import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const profile = () => {
    const followerlist = [{ nickname: '닉네임'}, { nickname: '닉네임2'}, { nickname: '닉네임3'}];
    const followinglist = [{ nickname: '팔로잉1'}, { nickname: '팔로잉2'}, { nickname: '팔로잉3'}];

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>회원정보</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />                
                <FollowList header ="팔로잉목록" data={followinglist} />
                <FollowList header ="팔로워목록" data={followerlist}  />         
            </AppLayout>
        </>
    );

}

export default profile;