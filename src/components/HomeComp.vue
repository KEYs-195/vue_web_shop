<template>
    <el-container class="home-container">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <img src="@/assets/homemain.webp" alt="logo">
                <span>电商后台管理系统</span>
            </div>
            <el-button type="info" @click=" loginOut ">退出</el-button>
        </el-header>

        <!-- 页面主体 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside :width=" isCollapse ? 'auto' : '200px' ">
                <div class="toggle-button" @click=" toggleCollapse ">|||</div>
                <!-- 侧边栏菜单区域 -->
                <el-menu background-color="#333744" text-color="#fff" active-text-color="#409BFF" unique-opened
                    :collapse=" isCollapse " :collapse-transition=" false " router :default-active="activePath">
                    <!-- 一级菜单 -->
                    <el-submenu :index=" item.id + '' " v-for=" item in menulist " :key=" item.id ">
                        <!-- 一级菜单的模板语句 -->
                        <template slot="title">
                            <!-- 图标 -->
                            <i :class=" iconObj[ item.id ] "></i>
                            <!-- 文本 -->
                            <span>{{ item.authName }}</span>
                        </template>

                        <!-- 二级菜单 -->
                        <el-menu-item @click=" saveNavState('/' + subItem.path) " :index=" '/' + subItem.path " v-for=" subItem in item.children " :key=" subItem.id ">
                            <template slot="title">
                                <!-- 图标 -->
                                <i class="el-icon-menu"></i>
                                <!-- 文本 -->
                                <span>{{ subItem.authName }}</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <!-- 右侧内容主体 -->
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
            // 左侧菜单
            menulist: [],
            iconObj: {
                '125': 'iconfont icon-user',
                '103': 'iconfont icon-tijikongjian',
                '101': 'iconfont icon-shangpin',
                '102': 'iconfont icon-danju',
                '145': 'iconfont icon-baobiao'
            },
            isCollapse: false,
            // 被激活的连接地址
            activePath: ''
        }
    },
    created() {
        this.getMenuList(),
        this.activePath = window.sessionStorage.getItem('activePath')
    },
    methods: {
        loginOut() {
            window.sessionStorage.clear();
            this.$router.push('/login');
        },

        // 获取所有的菜单
        async getMenuList() {
            const { data: res } = await this.$http.get('menus')
            if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
            this.menulist = res.data
            // console.log(res);
        },

        // 点击按钮切换菜单的折叠与展开
        toggleCollapse() {
            this.isCollapse = !this.isCollapse
        },

        // 保存链接的激活状态
        saveNavState(activePath) {
            window.sessionStorage.setItem('activePath', activePath)
            this.activePath = activePath
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