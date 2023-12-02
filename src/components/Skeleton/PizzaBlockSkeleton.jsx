import ContentLoader from "react-content-loader";

const PizzaBlockSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="130" cy="130" r="130" />
        <rect x="0" y="280" rx="10" ry="10" width="280" height="20" />
        <rect x="0" y="318" rx="10" ry="10" width="280" height="80" />
        <rect x="0" y="415" rx="10" ry="10" width="280" height="45" />
    </ContentLoader>
);

export default PizzaBlockSkeleton;
