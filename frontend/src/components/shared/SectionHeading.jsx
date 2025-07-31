const SectionHeading = ({title,heading}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-[#D99904]">---{title}---</p>
            <div className="divider w-1/4 mx-auto"></div>
            <h2 className="text-4xl font-bold">{heading}</h2>
            <div className="divider w-1/4 mx-auto"></div>
        </div>
    );
};

export default SectionHeading;