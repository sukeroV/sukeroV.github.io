// 配置加载器
// 功能：读取并展示 YAML 配置

// YAML 配置内容
const yamlConfig = `# CookieCloud 插件配置
# 配置文件格式：YAML
# 说明：此文件包含插件的所有可配置项及其默认值

# 工作模式
# up: 上传到服务器
# down: 覆盖到浏览器
# pause: 暂停
type: up

# 服务器配置
endpoint: "http://127.0.0.1:8088"  # 同步服务器地址
# uuid: ""  # 唯一标识符（自动生成，无需手动配置）
password: "nikrhqpMBhUep3xwvoeboo"  # 同步密码
headers: ""  # 自定义请求头

# 同步配置
interval: 1  # 同步时间间隔（分钟）
expire_minutes: 525600  # Cookie过期时间（分钟，默认365天）
with_storage: 1  # 是否同步本地存储（1=是，0=否）

# 域名过滤
domains: ""  # 同步域名关键字（每行一个）
blacklist: "google.com"  # 同步域名黑名单（每行一个）

# Cookie保活配置
# 格式：url|interval（每行一个，interval为保活间隔分钟数）
keep_live: |
  # 搜索引擎
  https://www.baidu.com|30
  
  # 社交媒体
  https://weibo.com|30
  https://www.zhihu.com|30
  https://www.xiaohongshu.com|30
  
  # 视频/内容平台
  https://www.bilibili.com|30
  https://www.douyin.com|30
  https://channels.weixin.qq.com|30  # 视频号
  
  # 电商网站
  https://www.taobao.com|30
  https://www.jd.com|30
  https://www.pinduoduo.com|30
  https://www.tmall.com|30
  https://www.suning.com|30
  https://www.gome.com.cn|30
  
  # 电商联盟
  https://pub.alimama.com|30
  https://union.jd.com|30
  
  # 其他常用网站
  https://www.csdn.net|30
`;

// 加载配置到页面
function loadConfig() {
    const yamlContentElement = document.getElementById('yaml-content');
    if (yamlContentElement) {
        yamlContentElement.textContent = yamlConfig;
        console.log('配置文件已加载并展示');
    }
}

// 当页面加载完成时执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadConfig);
} else {
    loadConfig();
}
