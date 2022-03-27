const Application = require('@waline/vercel');

module.exports = Application({
  async postSave(comment) {
    <p>Hi, {{username}}</p>
<p>
你在 {{appname}} 的评论收到了新的回复，请点击查看：
</p>
<p><a href="你的网址首页链接" style="display: inline-block; padding: 10px 20px; border-radius: 4px; background-color: #3090e4; color: #fff; text-decoration: none;">马上查看</a></p>


  },
});
