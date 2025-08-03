import { Helmet } from "react-helmet";

const HelmetTitlle = ({title}) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>FOODIE | {title}</title>
        </Helmet>
    );
};

export default HelmetTitlle;
