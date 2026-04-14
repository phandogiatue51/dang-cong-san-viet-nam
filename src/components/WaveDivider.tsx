const WaveDivider = () => (
    <div className="relative w-full h-16 overflow-hidden">
        <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
        >
            <path
                d="M0,60 C300,100 600,20 900,60 C1050,80 1200,40 1200,60 L1200,120 L0,120 Z"
                fill="#F4EFE6"
                opacity="0.8"
            />
            <path
                d="M0,80 C200,120 400,40 600,80 C800,120 1000,60 1200,80 L1200,120 L0,120 Z"
                fill="#2C5F6B"
                opacity="0.1"
            />
        </svg>
    </div>
);

export default WaveDivider;