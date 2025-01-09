// 创建弹出提示框
const tooltip = document.createElement('div');
tooltip.style.cssText = `
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  z-index: 10000;
  display: none;
`;
document.body.appendChild(tooltip);

// 词汇数据库
const wordDatabase = {
  '変数': 'へんすう',
  '関数': 'かんすう',
  '面白い': 'おもしろい',
  '難しい': 'むずかしい',
  '簡単': 'かんたん',
  '漢字': 'かんじ',
  '日本語': 'にほんご',
  '勉強': 'べんきょう',
  '学校': 'がっこう',
  '先生': 'せんせい',
  '図書館': 'としょかん',
  '新聞': 'しんぶん',
  '電車': 'でんしゃ',
  '携帯': 'けいたい',
  '天気': 'てんき',
  '時間': 'じかん',
  '朝': 'あさ',
  '昼': 'ひる',
  '晩': 'ばん',
  '食べる': 'たべる',
  '飲む': 'のむ',
  '見る': 'みる',
  '聞く': 'きく',
  '読む': 'よむ',
  '書く': 'かく',
  '話す': 'はなす',
  '分かる': 'わかる'
};

// 监听选择文本事件
document.addEventListener('mouseup', async function(e) {
  const selectedText = window.getSelection().toString().trim();
  
  if (selectedText.length === 0) {
    tooltip.style.display = 'none';
    return;
  }

  // 查找假名读音
  const reading = await getReading(selectedText);
  
  if (reading) {
    tooltip.innerHTML = `
      <div style="margin-bottom: 4px;">${selectedText}</div>
      <div style="font-size: 16px; color: #2563eb;">${reading}</div>
    `;
    tooltip.style.display = 'block';
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';
  } else {
    tooltip.style.display = 'none';
  }
});

// 获取读音
async function getReading(text) {
  // 首先检查本地数据库
  if (wordDatabase[text]) {
    return wordDatabase[text];
  }

  try {
    // 使用新的 API 进行请求
    const response = await fetch('https://labs.goo.ne.jp/api/hiragana', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        app_id: 'your_api_key',  // 替换为你自己的 API 密钥
        sentence: text,
        output_type: 'hiragana',  // 请求返回假名
      }),
    });

    if (!response.ok) throw new Error('API request failed');
    
    const data = await response.json();
    
    if (data.converted) {
      const reading = data.converted;  // 获取返回的假名
      wordDatabase[text] = reading;  // 将新词汇存储在本地数据库中
      return reading;
    }

    return null;
  } catch (error) {
    console.error('Error fetching reading:', error);
    return null;
  }
}

// 点击页面其他地方时隐藏提示框
document.addEventListener('mousedown', function(e) {
  if (e.target !== tooltip && !tooltip.contains(e.target)) {
    tooltip.style.display = 'none';
  }
});
