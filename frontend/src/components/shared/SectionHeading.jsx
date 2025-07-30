const SectionHeading = ({title,heading}) => {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <p>---{title}---</p>
            <div className="divider w-1/4 mx-auto"></div>
            <h2>{heading}</h2>
            <div className="divider w-1/4 mx-auto"></div>
        </div>
    );
};

export default SectionHeading;