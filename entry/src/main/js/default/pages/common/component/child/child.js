// child.js
export default {
    data: {
        showObj: false,
        text: 'I am child component!',
        extraData:'extra data in child js',
        images : [
                    { src: '/common/frame1.jpg' },
                    { src: '/common/frame2.jpg' }
                ]
    },

    childClicked () {
        this.showObj = !this.showObj;
        console.info('child component get parent text');
        console.info(`${this.$parent().text}`);

        console.info('child component get root text');
        console.info(`${this.$root().text}`);
    },
    animation() {
        console.info('child component animation');
        const animator = this.$element('animator');
        /**
           * Obtains the playback state. Available values are as follows:
           * Playing
           * Paused
           * Stopped
           */
        let state = animator.getState();
        console.info('child component state:' +state);
        if (state === 'paused') {
            animator.resume();
        } else if (state === 'stopped') {
            animator.start();
        } else {
            animator.pause();
        }
    }
}
