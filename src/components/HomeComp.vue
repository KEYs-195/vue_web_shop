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
            <el-aside :width=" isCollapse ? 'auto' : '200px' ">

                <div class="toggle-button" @click=" toggleCollapse ">|||</div>

                <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF" unique-opened
                    :collapse=" isCollapse " :collapse-transition=" false ">
                    <el-submenu :index=" item.id + '' " v-for=" item in menulist " :key=" item.id ">
                        <template slot="title">
                            <i :class=" iconObj[ item.id ] "></i>
                            <span>{{ item.authName }}</span>
                        </template>
                        <el-menu-item :index=" subItem.id + '' " v-for=" subItem in item.children " :key=" subItem.id ">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>{{ subItem.authName }}</span>
                            </template></el-menu-item>
                    </el-submenu>

                </el-menu>
            </el-aside>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            menulist: [],
            iconObj: {
                '125': 'iconfont icon-user',
                '103': 'iconfont icon-tijikongjian',
                '101': 'iconfont icon-shangpin',
                '102': 'iconfont icon-danju',
                '145': 'iconfont icon-baobiao'
            },
            isCollapse: false,
        }
    },
    created() {
        this.getMenuList()
    },
    methods: {
        ligout() {
            window.sessionStorage.clear()
            this.$router.push('/login')
        },
        async getMenuList() {
            const { data: res } = await this.$http.get('menus')
            if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
            this.menulist = res.data
            // console.log(res);
        },
        toggleCollapse() {
            this.isCollapse = !this.isCollapse
        },
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

    .iconfont {
        margin-right: 15px;
    }

    .el-menu {
        border: none;
    }
}

.el-main {
    background-color: #eaedf1;
}

.toggle-button {
    background-color: #4A5064;
    color: #fff;
    line-height: 24px;
    font-size: 10px;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
}
</style>