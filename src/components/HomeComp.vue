<template>
    <div>
        <el-button type="info" @click=" ligout ">退出</el-button>
    </div>
</template>

<script>
export default {
    methods: {
        ligout() {
            window.sessionStorage.clear()
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="less" scoped></style>