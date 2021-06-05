import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';

import wrapper from '../store/configureStore';



const NodeBird = ({ Component }) => {
    return(
        <>

            <Head>
                <meta charSet="utf-8" />
                <title>메인</title>
            </Head>
            <Component />
        </>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

// export default NodeBird;
export default wrapper.withRedux(NodeBird);