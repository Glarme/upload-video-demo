<template>
    <view class="content">
        <button @click="handleChooseImage">选择图片</button>
        <button @click="handleChooseVideo">选择视频</button>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Hello'
            }
        },
        onLoad() {

        },
        methods: {
            handleChooseImage() {
                my.chooseImage({
                    success(e) {
                        my.alert({
                            title: 'image-success',
                            content: JSON.stringify(e)
                        })
                        console.log('image-success:', e);
                    },
                    fail(e) {
                        my.alert({
                            title: 'image-fail',
                            content: JSON.stringify(e)
                        })
                        console.log('image-fail', e);
                    },
                    complete(e) {
                        my.alert({
                            title: 'image-complete',
                            content: JSON.stringify(e)
                        })
                        console.log('image-complete', e);
                    }
                })
            },
            handleChooseVideo(){
                my.chooseVideo({
                    success(e) {
                        my.alert({
                            title: 'video-success',
                            content: JSON.stringify(e)
                        })
                        console.log('video-success:', e);
                    },
                    fail(e) {
                        my.alert({
                            title: 'video-fail',
                            content: JSON.stringify(e)
                        })
                        console.log('video-fail', e);
                    },
                    complete(e) {
                        my.alert({
                            title: 'video-complete',
                            content: JSON.stringify(e)
                        })
                        console.log('video-complete', e);
                    }
                })
            }
        }
    }
</script>

<style>

</style>