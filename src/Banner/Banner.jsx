import React from 'react'
import './Banner.scss';
function Banner() {
    return (
        <div className="banner" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner.jpg)`}}>
            {/* Banner Search */}
            <div className="bannerSearch">
                Start your search
            </div>
        </div>
    )
}

export default Banner
