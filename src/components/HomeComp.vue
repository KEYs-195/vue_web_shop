<template>
    <el-container class="home-container">
        <el-header>
            <div>
                <img src="@/assets/homemain.webp" alt="logo">
                <span>电商后台管理系统</span>
            </div>

            <el-button type="info" @click=" ligout ">退出</el-button>
        </el-header>

        <el-container>
            <el-aside width="200px">
                <el-menu background-color="#333744" text-color="#fff" active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item index="1-4-1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template></el-menu-item>
                    </el-submenu>

                </el-menu>
            </el-aside>

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

    >div {
        display: flex;
        align-items: center;

        img {
            width: 20%;
            height: 20%;
        }

        span {
            margin-left: 15px;
        }
    }
}

.el-aside {
    background-color: #333744;
}

.el-main {
    background-color: #eaedf1;
}
</style>