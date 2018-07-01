exports.Animation =
{
    data()
    {
        const startTime = Date.now();

        return {
            startTime: startTime,
            lastFrameTime: startTime,
            deltaTime: 0,
            totalTime: 0,
            frameCounter: 0,
            frameHandler: () => undefined
        };
    },

    mounted()
    {
        this.requestAnimationFrame();
    },

    methods: {
        requestAnimationFrame()
        {
            window.requestAnimationFrame(this.processFrame);
        },

        processFrame(timestamp)
        {
            this.deltaTime = timestamp - this.lastFrameTime;
            this.totalTime = timestamp - this.startTime;

            if (this.frameHandler)
            {
                this.frameHandler();
            }

            this.lastFrameTime = timestamp;
            this.frameCounter++;

            this.requestAnimationFrame();
        }
    }
};
