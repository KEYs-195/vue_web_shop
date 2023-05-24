<template>
    <el-container class="home-container">
        <el-header>
            <el-button type="info" @click=" ligout ">退出</el-button>
        </el-header>

        <el-container>
            <el-aside width="200px">A</el-aside>

            <el-main>Main</el-main>
        </el-container>
    </el-container>
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

<style lang="less" scoped>
.home-container {
    height: 100%;
}

.el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 20px;
}

.el-aside {
    background-color: #333744;
}

.el-main {
    background-color: #eaedf1;
}
</style>