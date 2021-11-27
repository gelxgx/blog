<template>
  <div id="gitalk-container"></div>
</template>

<script>
  export default {
    name: "blog-comments",
    mounted() {
      const commentConfig = {
        // 是否开启
        enable: true,
        // clientID
        clientID: "5291b85384e2d6e9306a",
        // clientSecret
        clientSecret: "ae7841b520456eb854421561a0efa7500a99567b",
        // 评论项目名
        repo: 'blog-comments',
        owner: 'gelxgx',
        admin: ['gelxgx'],
        githubID:'gelxgx',
        id: decodeURI(window.location.pathname),
        language:'zh-CN',
        distractionFreeMode: true
      };
      const gitalk = new Gitalk(commentConfig);
      gitalk.render("gitalk-container");
    },
  };
</script>