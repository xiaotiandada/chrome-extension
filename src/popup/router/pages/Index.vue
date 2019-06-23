<template>
  <div class="home">
    <p class="momeny">
      0.0001
      <span>EOS</span>
    </p>

    <a class="withdraw" @click="jumppage" href="http://smartsignature.io">立即体现 ></a>
  </div>
</template>

<script>
import { chromeTabsSendMessage } from '../../../common/common';
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    // 监听来自content-script的消息
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      console.log(request, sender, sendResponse);
      if (request === 'background') alert('eos转帐');
    });
  },
  methods: {
    jumppage() {
      chromeTabsSendMessage('jumppage');
    },
    setOrangeButton() {
      chromeTabsSendMessage('setBc');
    },
  },
};
</script>

<style scoped>
.home {
  width: 280px;
  height: 300px;
}

.home .momeny {
  padding: 80px 0 0 0;
  margin: 0;
  text-align: center;
  box-sizing: border-box;
  font-size: 30px;
  color: #333;
  font-weight: 300;
}

.home .momeny span {
  font-size: 14px;
}

.withdraw {
  text-align: center;
  display: block;
  background: #409eff;
  padding: 8px 14px;
  margin: 60px 20px 0;
  border-radius: 3px;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
}
</style>
