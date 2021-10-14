import { Button, Space, Tooltip } from 'antd';
import React from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import { DownloadOutlined } from '@ant-design/icons';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    TrophyTwoTone,
    PlayCircleOutlined,
    LoadingOutlined,
    PlusCircleTwoTone,
    PlayCircleFilled
} from '@ant-design/icons';




const index = () => {

    ////////////////Button/////////////////////////
    // const state = {
    //     loadings: [],
    // };

    // enterLoading = index => {
    //     this.setState(({ loadings }) => {
    //         const newLoadings = [...loadings];
    //         newLoadings[index] = true;

    //         return {
    //             loadings: newLoadings,
    //         };
    //     });
    //     setTimeout(() => {
    //         this.setState(({ loadings }) => {
    //             const newLoadings = [...loadings];
    //             newLoadings[index] = false;

    //             return {
    //                 loadings: newLoadings,
    //             };
    //         });
    //     }, 6000);
    // };


    // const { loadings } = this.state;

    return (
        <>

            {/* Normal button */}
            <div>
                <Button type="primary" danger>
                    Primary
                </Button>
                <Button danger>Default</Button>
                <Button type="dashed" danger>
                    Dashed
                </Button>
                <Button type="text" danger>
                    Text
                </Button>
                <Button type="link" danger>
                    Link
                </Button>
            </div>

            {/* Search Button */}
            <div>
                <Tooltip title="search">
                    <Button shape="circle" icon={<SearchOutlined />} size="large" />
                </Tooltip>
                <Tooltip title="search here">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
                </Tooltip>
            </div>

            {/* Download Button */}
            <div>
                <br />
                <Button type="link">
                    Link
                </Button>


                <Button type="primary" shape="round" icon={<DownloadOutlined />} />
            </div>

            <div className="site-button-ghost-wrapper">
                <Button type="primary" ghost>
                    Primary
                </Button>
                <Button ghost>Default</Button>
                <Button type="dashed" ghost>
                    Dashed
                </Button>
            </div>

            <div className="icons-list">
                <HomeOutlined />
                <SyncOutlined spin />
                <SmileOutlined rotate={180} />
                <LoadingOutlined />

                <PlusCircleTwoTone />
                <PlayCircleOutlined />
                <TrophyTwoTone />
                <PlayCircleFilled />
            </div>,

        </>
    );
};

export default index;
