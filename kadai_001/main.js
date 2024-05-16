let untyped = '';
 let typed = '';
 let score = 0;
 //タイプ数を表示させるために、まずは変数を定義
 let typecount = 0;

const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
 const wrap = document.getElementById('wrap');
 const start = document.getElementById('start');
 //タイプ数を表示するための要素を取得する
 const countDisplay = document.getElementById('typecount');

const textLists = [
  'Hello World',
  'This is my App',
  'How are you?',
  'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be','Samurai',
  'Typing Game','Information Technology',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
  'programming'
];

const createText = () => {
  //正タイプした文字列をクリアにする
  typed = '';
  typedfield.textContent = typed;

  //console.log(Math.floor(Math.random() * textLists.length));
  let random = Math.floor(Math.random() * textLists.length)

  //untyped = textLists[1];
  untyped =textLists[random];
  untypedfield.textContent = untyped;
};

//createText();

const keyPress = e => {
  //誤タイプの場合
  if(e.key !== untyped.substring(0,1)) {
    wrap.classList.add('mistyped');

    //1秒後に背景色を戻す
    setTimeout(() => {
      wrap.classList.remove('mistyped');
    }, 100)
    return;
  }
    
    //正タイプの場合
    //console.log(e.key);
    //正解だった場合背景色を戻す
    score++;
    //wrap.classList.remove('mistyped');
    //↑上記のコードが正解コードから消えている。タイマー機能を作ろう中盤から表記なし（上記に変更されていた）
    //↓正しいタイプがあるたびにカウントを増やす
    typecount++;
    //↓タイプ数を表示する
    countDisplay.textContent = typecount;
    typed += untyped.substring(0,1);
    untyped = untyped.substring(1);
    typedfield.textContent = typed;
    untypedfield.textContent = untyped;


  if(untyped === ''){
    createText();
  }
};

const rankCheck = score => {
  //スコアの値を返す
  //return `${score}文字打てました!`;
  let text = '';

  if(score < 100) {
    text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
  } else if(score < 200) {
    text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;
  } else if(score < 300 ){
    text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;
  } else if(score >=300){
    text = `あなたのランクはSです。\nおめでとうございます!`;
  }
   return `${score}文字打てました!\n${text}\n【OK】リトライ / 【キャンセル】終了`;
};

const gameOver = id => {
  clearInterval(id);
  
  //ゲーム終了をコンソールに表示
  //console.log('ゲーム終了!');
  const result = confirm(rankCheck(score));

  if(result == true){
   window.location.reload();
  }
};

const timer = () => {
  let time = count.textContent;
  const id = setInterval(() => {
    time--;
    count.textContent = time;
     if(time <= 0){
      //カウント0になったらタイマー停止
      //clearInterval(id);
      
      //カウント0になったら「ゲーム終了！」を表示
      gameOver(id);
     }
  },1000);
};

//document.addEventListener('click')

//document.addEventListener('keypress',keyPress);

start.addEventListener('click', () => {
  //タイマーを開始
  timer();

  createText();
  start.style.display = 'none';
  //typecount.style.display = 'block';
  document.addEventListener('keypress', keyPress);

  //ゲーム開始時にタイプ数を表示
  countDisplay.textContent = typecount;

  //スタートボタンを押したらタイプ数の表示を開始する

});

untypedfield.textContent = 'スタートボタンで開始';