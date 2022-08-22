import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Home = () => {
    return (
        <>
            <BrowserView>
                browser moving home
            </BrowserView>
            <MobileView>
                mobile moving home
            </MobileView>
        </>
    )
}

export default Home